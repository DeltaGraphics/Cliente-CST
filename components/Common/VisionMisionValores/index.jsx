import { divide } from 'lodash';
import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import target from '../../../assets/images/target.jpg';

import './styles.scss';

const data = [
  { title: "Visión", description: '<p>Nuestra visión es ser una empresa líder en el diseño, integración e implementación de bienes y servicios de telecomunicación y tecnología de última generación a nivel nacional.</p>' },
  { title: "Misión", description: '<p>Nuestra misión es generar altos niveles de beneficios a nuestros clientes a través de la implementación y desarrollo de soluciones tecnológicas y servicios de telecomunicaciones.</p>' },
  { title: "Valores", description: '<p>Talento, Calidad, Integridad, Innovación y Responsabilidad</p>' }
]

const VisionMisionValores = () => {
	return (
    <Container className="vmv">
    <div className="vmv__column">
      <img src={target} />
    </div>
    <div className="vmv__description-column">
      {data.map(item => (
        <div className="vmv__description">
          <p>{item.title}</p> <div dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      ))}
    </div>
    </Container>
	);
};

export default VisionMisionValores;
