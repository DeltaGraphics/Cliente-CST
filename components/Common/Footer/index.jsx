import React, { Fragment } from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import logoImg from '../../../assets/images/logos/LogoFinal.png';
import mail from '../../../assets/images/icons/mail-footer.svg';
import pin from '../../../assets/images/icons/pin-footer.svg';
import phone from '../../../assets/images/icons/phone-footer.svg';
import instagram from '../../../assets/images/icons/instagram-footer.svg';
import facebook from '../../../assets/images/icons/facebook-footer.svg';

import './styles.scss';

const navegacion = [
	{ text: 'Inicio', link: '/' },
	{ text: 'Nosotros', link: '/nosotros' },
	{ text: 'Servicios', link: '/servicios' },
	{ text: 'Portafolio', link: '/portafolio' },
	{ text: 'Contacto', link: '/contacto' },
];

const contacto = [
	{ info: 'Calle Los Laureles, La Vega, Rep. Dom.', icon: pin },
	{ info: 'TEl.: 1 809-125-4567', icon: phone },
	{ info: 'Correo: info@solucionescentral.com', icon: mail },
	{ info: 'Siguenos en las redes:', icon: [instagram, facebook] },
];

const Footer = () => {
	return (
		<Fragment>
			<Container className="footer">
				<div className="footer__first-column">
					<img src={logoImg} />
					<p>Empresa de servicios de tecnología y telecomunicación, expertos en diseño e implementación de soluciones para el sector empresarial y residencial. </p>
					<p>Formamos parte del conglomerado de empresas de Heriberto Medrano Holding Group.</p>
				</div>
				<div className="footer__second-column">
					<p className="footer__second-column__title">Navegación</p>
					<ul>
					{navegacion.map(item => (
						<Link href={item.link}>{item.text}</Link>
					))}</ul>
				</div>
				<div className="footer__third-column">
					<p className="footer__third-column__title">Contacto</p>
					<ul>
						{contacto.map(item => (
						item.info !== 'Siguenos en las redes:'
						? (<li className="footer__third-column__item"><img src={item.icon} /><span >{item.info}</span></li>)
						: (<li className="footer__third-column__item"><p className="footer__third-column__first-p" >{item.info}</p><p className="footer__third-column__p" >{item.icon.map(item => (<img src={item} />))}</p></li>)
						))}
					</ul>
				</div>
			</Container>
			<div className="footer__copyright"><p>Copyright &copy; 2020. Todos los Derechos Reservados Central Solutions Technology</p></div>
		</Fragment>
	);
};

export default Footer;
