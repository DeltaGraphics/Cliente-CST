import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../../assets/images/portafolio.jpg';

import './styles.scss';

const PortafolioBanner = () => (
  <Container className="portafolio-banner ">
		<div className="portafolio-banner__image" >
			<img src={Banner} />
			<div className="portafolio-banner__image-cap" />
			<div className="portafolio-banner__content">
				<p className="portafolio-banner__content-title">Conoce lo que hacemos </p>
				<p className="portafolio-banner__content-subtitle">Somos expertos en buscar soluciones para ti </p>
      	{/* <button>Ver trabajos</button>   */}
			</div>
		</div>
  </Container>
);

export default PortafolioBanner;
