import React from 'react';
import { Carousel } from 'react-bootstrap';
import imgOne from '../../../assets/images/hero.jpg';
import imgTwo from '../../../assets/images/portafolio.jpg';
import imgThird from '../../../assets/images/nosotros.jpg';

import './styles.scss';


const CarouselHome = () => {
  const images = [ imgOne, imgTwo, imgThird ]
  
  return (
    <div class="ef-carousel">
    <input type="radio" name="unique-name" id="unique-name-1" checked class="ef-carousel__state"/>
    <input type="radio" name="unique-name" id="unique-name-2" class="ef-carousel__state"/>
    <input type="radio" name="unique-name" id="unique-name-3" class="ef-carousel__state"/>
    <div class="ef-carousel__items">
      {images.map(item => (
        <img src={item} alt="" class="ef-carousel__item"/>
      ))}
    </div>
    <div class="ef-carousel__next-group">
      <label for="unique-name-2" class="ef-carousel__next"></label>
      <label for="unique-name-3" class="ef-carousel__next"></label>
      <label for="unique-name-1" class="ef-carousel__next"></label>
    </div>
    <div class="ef-carousel__prev-group">
      <label for="unique-name-3" class="ef-carousel__prev"></label>
      <label for="unique-name-2" class="ef-carousel__prev"></label>
      <label for="unique-name-1" class="ef-carousel__prev"></label>
    </div>
    {/* <div class="ef-carousel__dots">
      <label for="unique-name-1" class="ef-carousel__dot"></label>
      <label for="unique-name-2" class="ef-carousel__dot"></label>
      <label for="unique-name-3" class="ef-carousel__dot"></label>
    </div> */}
  </div>
  );
}

export default CarouselHome;
