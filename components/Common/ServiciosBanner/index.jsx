import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../../assets/images/Servicios.jpg';

import './styles.scss';

const ServiciosBanner = () => (
  <Container className="servicios-banner ">
		<div className="servicios-banner__image" >
			<img src={Banner} />
			<div className="servicios-banner__image-cap" />
			<div className="servicios-banner__content">
      <p className="servicios-banner__content__title">
				Nuestros Servicios
			</p>
			<div className="servicios-banner__content__divider" />
			</div>
		</div>
  </Container>
);

export default ServiciosBanner;
