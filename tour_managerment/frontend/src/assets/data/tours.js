import tourImg01 from "../images1/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/bankok.jpg";
import tourImg09 from "../images/bankok1.jpg";
import tourImg10 from "../images/pattaya.jpg";
import tourImg11 from "../images/thailand1.jpg";
import tourImg12 from "../images/vietnam.jpg";
import tourImg13 from "../images/vietnam1.jpg";
const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address:'SomeWhere',
    price: 99000,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    address: 'SomeWhere',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    address: 'SomeWhere',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "CocGhe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'SomeWhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "09",
    title: "Hà Nội - Vịnh Hạ Long - Chùa Bái Đính - Tràng An - Tuyệt Tịnh Cốc (Khách sạn 4 sao) | Kích cầu du lịch",
    city: "Hà Nội",
    distance: 500,
    address: 'SomeWhere',
    price: 10990000,
    maxGroupSize: 10,
    desc: "Đặt chân đến Quảng Ninh – tỉnh đầu tiên có 4 thành phố: Hạ Long, Móng Cái, Uông Bí và Cẩm Phả tạo nên thành phố du lịch không chỉ nổi tiếng về biển như Vịnh Hạ Long với hàng nghìn đảo đá nhấp nhô trên sóng nước lung linh huyền ảo, những hang động tuyệt đẹp, những bãi tắm hoang sơ, làn nước mát lạnh trong veo đặc trưng của vùng đảo Cô Tô, Soi Sim, ...Không những thế, Quảng Ninh còn hấp dẫn du khách về không khí mát mẻ của vùng núi thiêng Yên Tử nơi hội tụ tâm linh, văn hóa và không gian nghỉ dưỡng đỉnh cao. Nếu bạn yêu sự hoang sơ của thiên nhiên, không gian thoáng mát thì hãy thử một lần ghé thăm cao nguyên Bình Liêu, được ví von như “Sapa vùng đất than”, với các cột mốc biên giới và dãy “cờ cỏ lau” hay con đường “Sống lưng khủng long” chạy dọc đường tuần biên luôn là điểm dừng yêu thích của du khách trong và ngoài tỉnh.Ninh Bình - vùng đất “Nơi mơ đến, chốn mong về” ghi dấu ấn với Quần thể danh thắng Tràng An -Di sản văn hóa thiên nhiên thế giới, đi thuyền chèo tham quan hệ thống thạch nhũ trong hang động và di tích Đền Trần; uy nghiêm trầm mặc với quần thể chùa Bái Đính, ẩn mình thanh tịnh sau hang động với Tuyệt tịnh cốc, …",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg13,
    featured: false,
  },
];

export default tours;
