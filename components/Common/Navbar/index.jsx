import React from 'react';
import Link from 'next/link';
import { Container, Navbar } from 'react-bootstrap';
import mail from '../../../assets/images/icons/mail.svg';
import pin from '../../../assets/images/icons/pin.svg';
import phone from '../../../assets/images/icons/phone.svg';
import instagram from '../../../assets/images/icons/instagram.svg';
import facebook from '../../../assets/images/icons/facebook.svg';
import whatsapp from '../../../assets/images/icons/whatsapp.svg';
import youtube from '../../../assets/images/icons/youtube.svg';

import './styles.scss';

const NavbarInfo = () => {
	const data = [
		{ info: '1 809 123 4567', icon: phone },
		{ info: 'info@solucionescentral.com', icon: mail },
		{ info: 'Los Laureles, La Vega 41000', icon: pin },
	];

	const icons = [
		{ link: '', icon: whatsapp },
		{ link: '', icon: youtube },
		{ link: '', icon: facebook },
		{ link: '', icon: instagram },
	];

	return (
		<Navbar expand="lg" variant="light" bg="light">
			<Container className="navbar">
				<ul className="navbar__info-list">
					{data.map((item) => (
						<>
							<img
								className="navbar__info-list__icon"
								src={item.icon}
							/>
							<li>{item.info}</li>
						</>
					))}
				</ul>
				<ul className="navbar__social-media-list">
					{icons.map((item) => (
						<li>
							<Link href={item.link}>
								<img
									className="navbar__social-media-list__icon"
									src={item.icon}
								/>
							</Link>
						</li>
					))}
				</ul>
			</Container>
		</Navbar>
	);
};

export default NavbarInfo;
