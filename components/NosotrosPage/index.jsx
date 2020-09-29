import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../Common/Navbar';
import Menu from '../Common/Menu';
import Footer from '../Common/Footer';
import HeroImg from '../../assets/images/nosotrosbanner.png';
import VisionMisionValores from '../Common/VisionMisionValores';
import Description from '../Common/DescriptionNosotros';
import NosotrosCompanies from '../Common/NosotrosCompanies';
import NosotrosBanner from '../Common/NosotrosBanner';

import './styles.scss';

const NosotrosPage = () => (
	<Container className="nosotros-page">
		<Navbar />
		<Menu linkNosotros="nosotros__current-link"/>
		<img className="nosotros-page__hero-img" src={HeroImg} />
		<Description />
		<VisionMisionValores />
		<NosotrosBanner />
		<NosotrosCompanies />
		<Footer />
	</Container>
);

export default NosotrosPage;
