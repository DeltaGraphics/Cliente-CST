import React, { Fragment } from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

import './styles.scss';

const data = [
  { title: "Visión", description: '<p>Nuestra visión es ser una empresa líder en el diseño, integración e implementación de bienes y servicios de telecomunicación y tecnología de última generación a nivel nacional.</p>' },
  { title: "Misión", description: '<p>Nuestra misión es generar altos niveles de beneficios a nuestros clientes a través de la implementación y desarrollo de soluciones tecnológicas y servicios de telecomunicaciones, con productos de alta calidad, que se adapten a sus necesidades y capacidades económicas; obteniendo así mayor provecho en sus inversiones.</p>' },
  { title: "Valores", description: '<p><p>Talento</p> <p>Calidad</p> <p>Integridad</p> <p>Innovación</p> <p>Responsabilidad</p></p>' }
]

const VisionMisionValores = () => {
	return (
			<Container className="vmv">
        {data.map(item => (
          <div className="vmv__column">
            <p className="vmv__title">{item.title}</p>
            <div className="vmv__description" dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        ))}
        <p></p>
			</Container>
	);
};

export default VisionMisionValores;
