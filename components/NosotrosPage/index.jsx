import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Common/Navbar';
import Menu from '../Common/Menu';
import Footer from '../Common/Footer';
import HeroImg from '../../assets/images/hero.jpg';
import VisionMisionValores from '../Common/VisionMisionValores';
import Description from '../Common/DescriptionNosotros';
import Example from '../../assets/images/example.png';
import NosotrosBanner from '../Common/NosotrosBanner';

import './styles.scss';

const NosotrosPage = () => (
	<Container className="nosotros-page">
		<Navbar />
		<Menu />
		<img className="nosotros-page__hero-img" src={HeroImg} />
		<VisionMisionValores />
		<Description />
		<NosotrosBanner />
		<img className="nosotros-page__example" src={Example} />
		<Footer />
	</Container>
);

export default NosotrosPage;
