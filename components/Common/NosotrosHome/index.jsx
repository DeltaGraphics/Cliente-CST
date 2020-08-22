import React from 'react';
import { Container } from 'react-bootstrap';
import NosotrosImg from '../../../assets/images/nosotrosHome.jpg';

import './styles.scss';

const NosotrosHome = () => {
	return (
		<Container className="nosotros-home">
			<img className="nosotros-home__img" src={NosotrosImg} />
			<div className="nosotros-home__img-cap" />
			<div className="nosotros-home__content">
				<p className="nosotros-home__content-title">Nosotros </p>
				<div className="nosotros-home__divider" />
				<p className="nosotros-home__content-subtitle">
					Somos un proveedor de servicios de tecnología y
					telecomunicaciones, expertos en diseñar e implementar
					soluciones para el sector empresarial.
				</p>
			</div>
		</Container>
	);
};

export default NosotrosHome;
