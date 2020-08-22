import React from 'react';
import { Container } from 'react-bootstrap';
import Cables from '../../../assets/images/cables.jpg';
import Code from '../../../assets/images/code.jpg';
import Gigabit from '../../../assets/images/gigabit.jpg';

import './styles.scss';

const PorqueElegirnos = () => {
	const data = [
		{
			img: Gigabit,
			title: 'Productos de Calidad',
			content:
				'Sistemas de rápida impletamentación, prácticos y de fácil monitoreo, ideales para uso residencial y empresarial. ',
		},
		{
			img: Code,
			title: 'Servicio Efectivo',
			content:
				'Sistemas de rápida impletamentación, prácticos y de fácil monitoreo, ideales para uso residencial y empresarial.',
		},
		{
			img: Cables,
			title: 'Personal Profesional',
			content:
				'Sistemas de rápida impletamentación, prácticos y de fácil monitoreo, ideales para uso residencial y empresarial.',
		},
	];

	return (
		<Container className="porque-elegirnos">
			<p className="porque-elegirnos__title"> ¿Por Que Elegirnos? </p>
			<div className="porque-elegirnos__divider" />
			<ul className="porque-elegirnos__cards-container">
				{data.map((item, index) => (
					<li className="porque-elegirnos__card">
						<img
							className="porque-elegirnos__card-img"
							src={item.img}
						/>
						<p className="porque-elegirnos__card-title">
							{item.title}
						</p>
						<p className="porque-elegirnos__card-content">
							{item.content}
						</p>
					</li>
				))}
			</ul>
		</Container>
	);
};

export default PorqueElegirnos;
