import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Artwork from './images/art.jpg';
import Artwork1 from './images/art1.png';
import Artwork2 from './images/art2.png';
import Artwork3 from './images/art3.jpg';

export default class MusicSlider extends Component {
    render() {
        var settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            centerPadding: "60px",
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
          const images = [ {id: 1, pic: Artwork}, {id: 2, pic: Artwork1}, {id: 3, pic: Artwork2}, {id: 4, pic: Artwork3}].map((item) => {
              return <div key={item.id}>
              <img src={item.pic}  className='slider-img' />
            </div>
          })
      return (
        <div className="container p-5">
          <h2>Music</h2>
          <Slider {...settings}>
           {images}
          </Slider>
        </div>
      );
    }
  }