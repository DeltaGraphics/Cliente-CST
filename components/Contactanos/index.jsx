import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Common/Navbar';
import Menu from '../Common/Menu';
import Footer from '../Common/Footer';
import ContactanosHero from '../Common/Contactanos';
import ContactoCard from '../Common/ContactoCard';
import ContactoBanner from '../Common/ContactoBanner';

import './styles.scss';

const Contactanos = () => (
	<Container className="contactanos">
		<Navbar />
		<Menu linkContacto="contactanos__current-link"/>
		<div className="contactanos__hero">
			<ContactoBanner className="contactanos__hero-img"/>
			<ContactoCard />
		</div>
		<ContactanosHero />
		<Footer />
	</Container>
);

export default Contactanos;
