import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from './images/img1.png';
import Img2 from './images/img2.png';
import Img3 from './images/img3.png';
import Img4 from './images/pic2.jpg';

export default class GallerySlider extends Component {
    render() {
      var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const images = [{id: 1, pic: Img1}, {id: 2, pic: Img2}, {id: 3, pic: Img3}, {id:4, pic: Img4}].map((item) => {
          return <div key={item.id}>
          <img src={item.pic} className='img-fluid slider-img' alt="slider" />
        </div>
      })
      return (
        <div>
          <h2> Gallery </h2>
          <Slider {...settings}>
            {images}
         </Slider> 
        </div>
      );
    }
  }