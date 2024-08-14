import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'reactstrap'
import heroImg1 from '../../assets/images/hero-img01.jpg'
import heroImg2 from '../../assets/images/hero-img02.jpg'
import heroVideo from '../../assets/images/hero-video.mp4'
import worldImg from '../../assets/images/world.png'
import Subtitle from "../shared/subtitle";
import SearchBar from '../shared/SearchBar'
import experienceImg from '../../assets/images/experience.png'
import ServicesList from '../../services/servicesList'
import FeaturedTourlist from '../../components/Featured-tours/FeaturedTourlist'
import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery'
import Testimonials from '../testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'
const home = () => {
  return <>
                      {/* hero section start */}
        <section>
            <Container>
              <Row>
                <Col lg='6'>
                    <div className="hero__content">
                        <div className="hero__subtitle d-flex align-items-center">
                            <Subtitle subtitle={'Know before you go'}/>
                              <img src={worldImg} alt=''/>
                        </div>
              <h1>Du lịch mở ra cánh cửa để tạo nên  <span className="highlight">những kỷ niệm.</span></h1>
              <p>Một lời khẳng định đầy cảm hứng về sức mạnh
                của du lịch trong việc tạo dựng những ký ức đẹp đẽ và quý giá.
                Nó khơi gợi những cảm xúc tích cực về những trải nghiệm mới mẻ,
                những khám phá thú vị và những khoảnh khắc đáng nhớ trong hành trình viễn du.</p>

                    </div>
                </Col>
                <Col lg='2'>
                  <div className="hero__img-box">
                    <img src={heroImg1} alt=''/>
                  </div>
                </Col>
                <Col lg='2'>
                  <div className="hero__img-box mt-4">
                    <video src={heroVideo} alt='' controls/>
                  </div>
                </Col>
                <Col lg='2'>
                  <div className="hero__img-box mt-5">
                    <img src={heroImg2} alt=''/>
                  </div>
                </Col>
                <SearchBar/>
              </Row>
            </Container>
        </section>
        <section>
          <Container>
              <Row>
                <Col lg='3'>
                  <h5 className='services__subtitle'>Những điều chúng tôi phục vụ</h5>
                  <h2 className='services__title'>Chúng tôi cung cấp những dịch vụ tốt nhất của chúng tôi.</h2>
                </Col>
                <ServicesList />
              </Row>
          </Container>
        </section>
        {/* hero section end */}
        {/* featured tour section start */}
        <section>
          <Container>
            <Row>
              <Col lg='12' className='mb-5'>
                <Subtitle subtitle={"Explore"}/>
                <h2 className='featured__tour-title'>Các chuyến du lịch mà chúng tôi muốn gửi đến bạn</h2>
              </Col>
              <FeaturedTourlist/>
            </Row>
          </Container>
        </section>


        {/* featured tour section end */}
        {/* experience section start */}
        <section>
          <Container>
              <Row>
                <Col lg='6'>
                  <div className="experience__content">
                    <Subtitle subtitle={"Experience"}/>
                    <h2>
                      Với tất cả kinh nghiệm  <br/>của chúng tôi để phục vụ bạn
                    </h2>
                    <p>
                Thể hiện sự tự tin, khẳng định năng lực,cam kết về chất lượng dịch vụ.
                      <br/>
                Nó tạo dựng niềm tin cho khách hàng về khả năng đáp ứng nhu cầu của họ một cách hiệu quả và chuyên nghiệp.
                    </p>
                  </div>

                  <div className='counter__wrapper d-flex align-items-center gap-5'>
                    <div className='counter__box'>
                        <span>12k+</span>
                        <h6>Successful Trip</h6>
                    </div>
                    <div className='counter__box'>
                      <span>2k+</span>
                      <h6>Regular clients</h6>
                    </div>
                    <div className='counter__box'>
                      <span>15</span>
                      <h6>Years experience</h6>
                    </div>
                  </div>
                </Col>

                <Col lg='6'>
                  <div className="experience__img">
                    <img src={experienceImg} alt=''/>

                    {/* 1:11:32 / 1:43:06 */}
                  </div>

                </Col>
              </Row>

          </Container>
        </section>
        {/* experience section end */}
        {/* gallery section start */}
        <section>
          <Container>
            <Row>
              <Col lg='12'>
                <Subtitle subtitle={'Gallery'}/>
                <h2 className='gallery__title'>Visit our customers tour gallery</h2>
              
              </Col>
              <Col lg='12'>
                  <MasonryImagesGallery/>
              </Col>
            </Row>
          </Container>
        </section>

        {/* gallery section end */}
        {/* testimonial section start */}
        <section>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans love'}/>
              <h2 className='testimonial__title'>What our fans say obout us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </section>
        {/* testimonial section end */}
        <Newsletter/>
  
  </>
}

export default home;