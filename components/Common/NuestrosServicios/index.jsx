import React from 'react';
import { Button, Container } from 'react-bootstrap';
import ControlImg from '../../../assets/images/icons/smart-lock.svg';
import ConectividadImg from '../../../assets/images/icons/conection.svg';
import CallCenterImg from '../../../assets/images/icons/technical-support.svg';
import VideoImg from '../../../assets/images/icons/CameraSecurity.svg';
import CallImg from '../../../assets/images/icons/fax.svg';
import DocImg from '../../../assets/images/icons/work-from-home.svg';

import './styles.scss';

const NuestrosServicios = () => {
	const data = [
		{
			img: ControlImg,
			title: 'Control de Acceso',
			content:
				'Acceso en puertas con sistemas biométricos, control de acceso fisico. ',
		},
		{
			img: ConectividadImg,
			title: 'Conectividad de Red',
			content:
				'Conectividad a Internet con conexión Tier2 directamente al Backbone en Miami, FL Acceso con Bandwidth garantizado de 5Mbps hasta 1Gbps',
		},
		{
			img: CallCenterImg,
			title: 'Call Center',
			content:
				'Alojamiento físico de servidores en nuestro Datacentrer',
		},
		{
			img: VideoImg,
			title: 'Video Vigilancia',
			content:
				'Sistemas de rápida implementación, prácticos y de fácil monitoreo, ideales para uso residencial y empresarial.',
		},
		{
			img: CallImg,
			title: 'Telefonía IP',
			content:
				'Diseño e implementación de sistemas de comunicación unificada sobre IP',
		},
		{
			img: DocImg,
			title: 'Domotica y Automatización',
			content:
				'Integración de sistemas de automatización y control inteligente en viviendas.',
		},
	];

	return (
		<Container className="nuestros-servicios-home">
			<p className="nuestros-servicios-home__title">
				Nuestros Servicios
			</p>
			<div className="nuestros-servicios-home__divider" />
			<ul className="nuestros-servicios-home__cards-container">
				{data.map((item, index) => (
					<li className="nuestros-servicios-home__card">
						<img
							className="nuestros-servicios-home__card-img"
							src={item.img}
						/>
						<p className="nuestros-servicios-home__card-title">
							{item.title}
						</p>
						<p className="nuestros-servicios-home__card-content">
							{item.content}
						</p>
					</li>
				))}
			</ul>
    	<Button href="/servicios" className="button__ver-mas">Ver más</Button>
		</Container>
	);
};

export default NuestrosServicios;
