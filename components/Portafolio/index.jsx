import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Common/Navbar';
import Menu from '../Common/Menu';
import Footer from '../Common/Footer';
import PortafolioBanner from '../Common/PortafolioBanner';
import NuestrosTrabajos from '../Common/NuestrosTrabajos';
import NuestrosClientes from '../Common/NuestrosClientes';
import UltimosTrabajos from '../Common/UltimosTrabajos';

import './styles.scss';

const Portafolio = () => (
	<Container className="portafolio-page">
		<Navbar />
		<Menu linkPortafolio="portafolio__current-link"/>
    <PortafolioBanner />
		<NuestrosTrabajos />
		<NuestrosClientes />
		<UltimosTrabajos />
		<Footer className="portafolio__footer"/>
	</Container>
);

export default Portafolio;
