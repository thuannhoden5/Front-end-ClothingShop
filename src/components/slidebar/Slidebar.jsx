import React from "react";
import "./styles.scss";

const Slidebar = () => {
  return (
    <div className="container-slide">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="slide2.png" alt="" />
          </div>
          <div className="carousel-item " data-bs-interval="2000">
            <img
              src="slide1.jpeg"
              alt=""
            />
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <div className="image-container">
              <img
                src="slide3.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    // <div className="w3-display-container mySlides">
    //   <img
    //     src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
    //     alt=""
    //   />
    //   <div class="w3-display-bottomleft w3-container w3-padding-16 w3-black">
    //     French Alps
    //   </div>
    // </div>
    // <div className="w3-content w3-section">
    //   <img className="mySlides" src="" />
    //   <img className="mySlides" src="" />
    //   <img className="mySlides" src="" />
    // </div>
  );
};
export default Slidebar;
