import * as React from 'react';
import './index.scss';
import Carousel from 'react-bootstrap/Carousel';

const BodyCarousel: React.FC = () => (
  <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="https://sun9-74.userapi.com/c858220/v858220403/224a50/xu1oTRmtlj0.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="carousel-text-dark">
          <h3>Learn new words!</h3>
          <p>Изучайте новые слова и вспоминайте забытые</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="https://sun9-76.userapi.com/c858220/v858220403/224a28/JgCVvY7-ukU.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="carousel-text-dark">
          <h3>Check your stats</h3>
          <p>Отслеживайте свои успехи</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="https://sun1.velcom-by-minsk.userapi.com/c858220/v858220403/224a3c/YzS0JwdbxeA.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="carousel-text-dark">
          <h3>Enjoy awesome games!</h3>
          <p>Проверьте себя и хорошо проведите время в увлекательных играх</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default BodyCarousel;
