import React from 'react';
import { Container } from 'react-bootstrap';
import hero from '../../../assets/images/hero.jpg';
import giga from '../../../assets/images/gigabit.jpg';
import code from '../../../assets/images/code.jpg';
import cables from '../../../assets/images/cables.jpg';


import './styles.scss';

const NuestrosServicios = () => {
	const images = [ hero, giga, code, cables, hero, giga, code, cables, hero, giga ];

	return (
		<Container className="nuestro-portafolio">
			<p className="nuestro-portafolio__title">
				Nuestro Portafolio
			</p>
			<div className="nuestro-portafolio__divider" />
			<div className="nuestro-portafolio__images">
				{images.map(item => (
					<img src={item} />
				))}
			</div>
		</Container>
	);
};

export default NuestrosServicios;
