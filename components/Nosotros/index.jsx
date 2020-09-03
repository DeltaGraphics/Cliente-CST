import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Common/Navbar';
import Menu from '../Common/Menu';
import HeroImg from '../../assets/images/hero.jpg';
import Footer from '../Common/Footer';

import './styles.scss';

const Nosotros = () => (
	<Container className="home-page">
		<Navbar />
		<Menu classStyle="link-active"/>
		<img className="home-page__hero-img" src={HeroImg} />
		<Footer />
	</Container>
);

export default Nosotros;
