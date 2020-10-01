import React from 'react';
import a from 'next/link';
import { Container, Navbar } from 'react-bootstrap';
import Logo from '../../../assets/images/logos/LogoFinal.png';

import './styles.scss';

const Menu = ({ linkInicio, linkNosotros, linkContacto, linkPortafolio, linkServicios }) => {
	return (
		<Navbar
			className="menu__container"
			expand="lg"
			variant="light"
			bg="light"
		>
			<Container className="menu">
				<a href="/" className="menu__icon"><img src={Logo} /></a>
				<ul className="menu__list">
					<a className={linkInicio} href="/">Inicio</a>
					<a className={linkNosotros} href="/nosotros">Nosotros</a>
					<a className={linkServicios} href="/servicios">Servicios</a>
					<a className={linkPortafolio} href="/portafolio">Portafolio</a>
					<a className={linkContacto} href="/contacto">Contacto</a>
				</ul>
				<div class="menu-activador">
						<input type="checkbox" id="lanzador" />
						<label for="lanzador">
							<span class="menu-activador-linea"></span>
							<span class="menu-activador-linea"></span>
							<span class="menu-activador-linea"></span>
						</label>
				</div>
			</Container>
		</Navbar>
	);
};

export default Menu;
