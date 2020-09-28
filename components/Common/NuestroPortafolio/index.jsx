import React from 'react';
import { Container } from 'react-bootstrap';
import hero from '../../../assets/images/hero.jpg';
import giga from '../../../assets/images/gigabit.jpg';
import code from '../../../assets/images/code.jpg';
import cables from '../../../assets/images/cables.jpg';

import './styles.scss';

const NuestrosServicios = () => {
	const images = [ hero, giga, code, cables, hero, giga, code, cables];

	return (
		<a href="/portafolio" className="nuestro-portafolio">
			<p className="nuestro-portafolio__title">
				Nuestro Portafolio
			</p>
			<div className="nuestro-portafolio__divider" />
			<div className="nuestro-portafolio__images">
				{images.map(item => (
					<>
					<div className="nuestro-portafolio__img">
						<img src={item} />
						<p className="nuestro-portafolio__text">+</p>
					</div>
					</>
				))}
			</div>
		</a>
	);
};

export default NuestrosServicios;
