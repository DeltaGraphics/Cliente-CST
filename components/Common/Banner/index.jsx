import React from 'react';
import { Button, Container } from 'react-bootstrap';
import banner from '../../../assets/images/banner.png';

import './styles.scss';

const Banner = () => (
  <Container className="banner">
		<div className="banner__image" >
			<img src={banner} />
			<div className="banner__image-cap" />
			<div className="banner__content">
					<p className="banner__content-title">Servicios hechos por profesionales </p>
					<p className="banner__content-subtitle">
						Calidad y profesionalismo destacable
					</p>
					<Button href="/contacto" className="banner__content__button">Contáctanos</Button>
			</div>
		</div>
  </Container>
);

export default Banner;
