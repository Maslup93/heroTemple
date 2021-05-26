import React from "react";
import { Carousel } from "react-bootstrap";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="container">
      <Carousel fade className="carousel">
        <Carousel.Item >
          
          <img
            className="img"
            src="https://www.superherodb.com/pictures2/portraits/10/100/10444.jpg"
            alt="First slide"
          />

         
          <Carousel.Caption>
            <h1 className="carouselText">Welcome To Hero Temple!</h1>
            <h3 className="carouselText">
              The place where you'll find heroes from multiple universes
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img"
            src="https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/161.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1 className="carouselText">Search your favourite heroes</h1>
            <h3 className="carouselText">
              Search heroes by name and learn lots of info about them
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img"
            src="https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1284.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="carouselText">Select,Build,Compare</h1>
            <h3 className="carouselText">
              Select and build and compare your dream team!
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Welcome;
