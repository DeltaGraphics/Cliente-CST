import React from 'react';
import { Container } from 'react-bootstrap';

import './styles.scss';

const NuestrosServicios = () => {
	return (
		<Container className="nuestro-portafolio">
			<p className="nuestro-portafolio__title">
				{' '}
				Nuestro Portafolio{' '}
			</p>
			<div className="nuestro-portafolio__divider" />
		</Container>
	);
};

export default NuestrosServicios;
