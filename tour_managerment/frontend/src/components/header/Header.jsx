import React,{useRef,useEffect,useContext} from 'react'
import {Container,Row,Button} from 'reactstrap'
import { NavLink,Link,useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logowhale.png'
import "../header/header.css";
import { AuthContext } from "../../context/AuthContext";

const nav_links=[

  {
    path:'/Home',
    display:'TRANG CHỦ'
  },
  {
    path:'/about',
    display:'VỀ CHÚNG TÔI'
  },
  {
    path:'/tours',
    display:'CÁC DỊCH VỤ TOUR'
  },
  // {
  //   path:'/',
  //   display:''
  // },
  // {
  //   path:'/',
  //   display:''
  // },
  // {
  //   path:'/',
  //   display:''
  // },
  // {
  //   path:'/',
  //   display:''
  // },
]

export const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/") //41:36 / 1:23:09
  };
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  };

  useEffect(() => {
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc)
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return <header className="header" ref={headerRef}>
      <Container>
          <Row>
            <div className="nav_wrapper d-flex align-items-center
            justify-content-between">
                {/* logo start*/}
                  <div className="logo">
                    <img src={logo} alt='logo'/>
                  </div>
                {/* logo end*/}
                {/* ============================================================================================= */}
                {/* menu start*/}
                <div className="navigation"ref={menuRef} onClick={toggleMenu}>
                  <ul className="menu d-flex align-items-center gap-5">
                      {nav_links.map((item,index)=>(
                        <li className='nav__item' key={index}>
                          <NavLink to={item.path} className={navClass=>navClass.isActive?'active__link':""}>{item.display}</NavLink>
                        </li>
                      ))}
                  </ul>
                </div>
                {/* menu end*/}
                <div className="nav__right d-flex align-items-center gap-4">
                <div className="nav__btns d-flex align-items-center gap-4">
                {
                  user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                    <>
                      <Button className="btn secondary__btn">
                        <Link to="/login">Đăng nhập</Link>
                      </Button>
                      <Button className="btn secondary__btn">
                        <Link to="/register">Đăng kí</Link>
                      </Button>
                    </>
                  )}
                </div>
            <span className="mobile__menu" onClick={toggleMenu}>
                      <i class="ri-menu-line"></i>
                      </span>
                </div>
                
            </div>
          </Row>
      </Container>
  </header>
}
export default Header;
