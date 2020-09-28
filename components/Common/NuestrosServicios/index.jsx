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
				'Sistemas de rápida impletamentación, prácticos y de fácil monitoreo, ideales para uso residencial y empresarial. ',
		},
		{
			img: ConectividadImg,
			title: 'Conectividad de Red',
			content:
				'Sistemas de rápida impletamentación, prácticos y de fácil monitoreo, ideales para uso residencial y empresarial.',
		},
		{
			img: CallCenterImg,
			title: 'Call Center',
			content:
				'Sistemas de rápida impletamentación, prácticos y de fácil monitoreo, ideales para uso residencial y empresarial.',
		},
		{
			img: VideoImg,
			title: 'Video Vigilancia',
			content:
				'Sistemas de rápida impletamentación, prácticos y de fácil monitoreo, ideales para uso residencial y empresarial.',
		},
		{
			img: CallImg,
			title: 'Telefonía IP',
			content:
				'Sistemas de rápida impletamentación, prácticos y de fácil monitoreo, ideales para uso residencial y empresarial.',
		},
		{
			img: DocImg,
			title: 'Domotica y Automatización',
			content:
				'Sistemas de rápida impletamentación, prácticos y de fácil monitoreo, ideales para uso residencial y empresarial.',
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
