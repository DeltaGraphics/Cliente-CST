import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../../assets/images/contactanoshero.jpg';
import instagram from '../../../assets/images/icons/instagram.svg';
import facebook from '../../../assets/images/icons/facebook.svg';
import whatsapp from '../../../assets/images/icons/whatsapp.svg';
import youtube from '../../../assets/images/icons/youtube.svg';

import './styles.scss';

const icons = [
	{ link: '', icon: whatsapp },
	{ link: '', icon: youtube },
	{ link: '', icon: facebook },
	{ link: '', icon: instagram },
];

const ContactoBanner = () => (
  <Container className="contacto-banner">
		<div className="contacto-banner__image" >
			<img className="contacto-banner__image-img" src={Banner} />
			<div className="contacto-banner__image-cap" />
			<div className="contacto-banner__content-main">
				<div className="contacto-banner__divider"/>
				<div className="contacto-banner__content">
					<p className="contacto-banner__content-title">Contactános </p>
					<p className="contacto-banner__content-subtitle">
						Ponte en contacto con nosotros estamos para servirte.
					</p>
				</div>
			</div>
		</div>
			<ul className="contacto-banner__social-media-list">
						{icons.map((item) => (
							<li>
								<a href={item.link}>
									<img className="contacto-banner__social-media-icon" src={item.icon} />
								</a>
							</li>
						))}
				</ul>
  </Container>
);

export default ContactoBanner;
