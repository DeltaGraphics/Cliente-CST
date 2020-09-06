import React from 'react';
import { Container } from 'react-bootstrap';
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
					<button>Contáctanos</button>
			</div>
		</div>
  </Container>
);

export default Banner;
