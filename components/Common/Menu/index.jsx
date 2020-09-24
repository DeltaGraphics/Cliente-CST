import React from 'react';
import a from 'next/link';
import { Container, Navbar } from 'react-bootstrap';
import Logo from '../../../assets/images/logos/LogoFinal.png';

import './styles.scss';

const Menu = ({ linkInicio, linkNosotros, linkContacto, linkPortafolio }) => {
	return (
		<Navbar
			className="menu__container"
			expand="lg"
			variant="light"
			bg="light"
		>
			<Container className="menu">
				<img className="menu__icon" src={Logo} />
				<ul className="menu__list">
					<a className={linkInicio} href="/">Inicio</a>
					<a className={linkNosotros} href="/nosotros">Nosotros</a>
					<a className="" href="/servicios">Servicios</a>
					<a className={linkPortafolio} href="/portafolio">Portafolio</a>
					<a className={linkContacto} href="/contacto">Contacto</a>
				</ul>
			</Container>
		</Navbar>
	);
};

export default Menu;
