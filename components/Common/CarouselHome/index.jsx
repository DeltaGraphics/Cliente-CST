import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import imgOne from '../../../assets/images/hero.jpg';
import imgTwo from '../../../assets/images/portafolio.jpg';
import imgThird from '../../../assets/images/nosotros.jpg';

import './styles.scss';

const images = [ imgOne, imgTwo, imgThird ]

const CarouselHome = () => (
  <Carousel autoplay={30} showThumbs={false} stopOnHover={false} interval={3000} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} >
    {images.map((item, index) => (
      <div>
          <img className="carousel-images" src={item} />
      </div>
    ))}
  </Carousel>
);

export default CarouselHome;
