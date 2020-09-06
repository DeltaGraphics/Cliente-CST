import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../../assets/images/nostrosbanner.png';

import './styles.scss';

const NosotrosBanner = () => (
  <Container className="nosotros-banner ">
		<div className="nosotros-banner__image" >
			<img src={Banner} />
			<div className="nosotros-banner__image-cap" />
			<div className="nosotros-banner__content">
					<p className="nosotros-banner__content-title">Somos parte del conglomerado de empresas de "Heriberto Medrano Holding Group" </p>
			</div>
		</div>
  </Container>
);

export default NosotrosBanner;
