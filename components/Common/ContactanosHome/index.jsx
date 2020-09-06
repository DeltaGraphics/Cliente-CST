import React from 'react';
import { Container } from 'react-bootstrap';
import ContactanosImg from '../../../assets/images/ContactanosHome.jpg';

import './styles.scss';

const ContactanosHome = () => {
	return (
		<Container className="contactanos-home">
		<div className="contactanos-home__img">
			<img src={ContactanosImg} />
			<div className="contactanos-home__img-cap" />
			<div className="contactanos-home__content">
				<p className="contactanos-home__content-subtitle">
					Contactanos con una estructura de servicios profesionales
					compuesta por el personal técnico de más alto nivel
				</p>
			</div>
		</div>
		</Container>
	);
};

export default ContactanosHome;
