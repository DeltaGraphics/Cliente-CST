import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Common/Navbar';
import Menu from '../Common/Menu';
import NosotrosHome from '../Common/NosotrosHome';
import HeroImg from '../../assets/images/hero.jpg';
import PorqueElegirnos from '../Common/PorqueElegirnos';
import NuestrosServicios from '../Common/NuestrosServicios';
import ContactanosHome from '../Common/ContactanosHome';
import NuestroPortafolio from '../Common/NuestroPortafolio';

import './styles.scss';

const HomePage = () => (
	<Container className="home-page">
		<Navbar />
		<Menu />
		<img className="home-page__hero-img" src={HeroImg} />
		<NosotrosHome />
		<PorqueElegirnos />
		<NuestrosServicios />
		<ContactanosHome />
		<NuestroPortafolio />
	</Container>
);

export default HomePage;
