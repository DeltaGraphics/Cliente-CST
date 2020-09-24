import React from 'react';
import { Container } from 'react-bootstrap';
import alaver from '../../../assets/images/alaver.png';
import ucateci from '../../../assets/images/ucateci.png';
import sol from '../../../assets/images/Farmacia-el-sol.png';
import coopedac from '../../../assets/images/Coopedac.png';
import vegareal from '../../../assets/images/69-COOPERATIVA-VEGA-REAL.jpg';

import './styles.scss';

const NuestrosClientes = () => {
	const images = [ alaver, ucateci, sol, coopedac, vegareal ];

	return (
    <Container className="nuestros-clientes">
			<p className="nuestros-clientes__title">
				Nuestros Clientes
			</p>
			<div className="nuestros-clientes__divider" />
			<div className="nuestros-clientes__images">
				{images.map(item => (
					<>
					<div className="nuestros-clientes__img">
						<img src={item} />
						<p className="nuestros-clientes__text">Ver más</p>
					</div>
					</>
				))}
			</div>
    </ Container>
	);
};

export default NuestrosClientes;
