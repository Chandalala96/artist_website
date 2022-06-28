import React, { useState } from "react";
import data from "./data/images.js";
import Modal from "./galleryComponents/Modal";
import './gallery.css';



export default function Gallery() {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.link);
      };

      const handelRotationRight = () => {
        const totalLength = data.data.length;
        if (currentIndex + 1 >= totalLength) {
          setCurrentIndex(0);
          const newUrl = data.data[0].link;
          setClickedImg(newUrl);
          return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.data.filter((item) => {
          return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
      };

      const handelRotationLeft = () => {
        const totalLength = data.data.length;
        if (currentIndex === 0) {
          setCurrentIndex(totalLength - 1);
          const newUrl = data.data[totalLength - 1].link;
          setClickedImg(newUrl);
          return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.data.filter((item) => {
          return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
      };

    return(
        <div className="container text-center">
          <h1>Gallery <i className="bi bi-camera-fill"></i></h1>
             <div className="row d-flex justify-content-center">
        {data.data.map((item, index) => (
          <div key={item.id} className="col-sm-3 mt-5">
            <img 
              src={item.link}
              alt='gallery'
              className="img-fluid"
              // style={{width: "100%", height:"250px"}}
              onClick={() => handleClick(item, index)}
            />
          </div>
        ))}
        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
        </div>
       
    )
}