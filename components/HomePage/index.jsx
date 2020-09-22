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
import Footer from '../Common/Footer';
import Banner from '../Common/Banner';

import './styles.scss';

const HomePage = () => (
	<Container className="home-page">
		<Navbar />
		<Menu linkInicio="home-page__current-link" />
		<img className="home-page__hero-img" src={HeroImg} />
		<NosotrosHome />
		<PorqueElegirnos />
		<NuestrosServicios />
		<ContactanosHome />
		<NuestroPortafolio />
		<Banner />
		<Footer />
	</Container>
);

export default HomePage;
