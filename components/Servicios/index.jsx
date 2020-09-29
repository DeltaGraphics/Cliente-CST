import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Common/Navbar';
import Menu from '../Common/Menu';
import Footer from '../Common/Footer';
import ServiciosBanner from '../Common/ServiciosBanner';
import Servicios from '../Common/Servicios';

import './styles.scss';

const Portafolio = () => (
	<Container className="portafolio-page">
		<Navbar />
		<Menu linkServicios="servicios__current-link"/>
    <ServiciosBanner />
		<Servicios />
		<Footer className="portafolio__footer"/>
	</Container>
);

export default Portafolio;
