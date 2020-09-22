import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from '../Carousel';
import Banner from '../../../assets/images/companies-back.jpg';

import './styles.scss';

const NosotrosCompanies = () => (
  <Container className="nosotros-companies ">
		<div className="nosotros-companies__image" >
			<img src={Banner} />
			<div className="nosotros-companies__image-cap"/>
      <Carousel />
    </div>
  </Container>
);

export default NosotrosCompanies;
