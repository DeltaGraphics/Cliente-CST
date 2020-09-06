import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Common/Navbar';
import Menu from '../Common/Menu';
import Footer from '../Common/Footer';
import ContactanosHero from '../Common/Contactanos';
import HeroImg from '../../assets/images/contactanoshero.png';
import Location from '../../assets/images/location.png';

import './styles.scss';

const Contactanos = () => (
	<Container className="contactanos">
		<Navbar />
		<Menu />
		<img className="contactanos__hero-img" src={HeroImg} />
		<ContactanosHero />
		<img className="contactanos__location" src={Location} />
		<Footer />
	</Container>
);

export default Contactanos;
