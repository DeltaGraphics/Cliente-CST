import React from 'react';
import { Container } from 'react-bootstrap';
import cables from '../../../assets/images/cables.jpg';

import './styles.scss';

const Banner = () => (
  <Container className="description">
    <di className="description__column">
      <p className="description__title" >Somos una empresa centrada en brindar la mejor solucion para ti.</p>
      <p className="description__description" >
        <p>Somos un proveedor de servicios de tecnología y telecomunicaciones, expertos en diseñar e implementar soluciones para el sector empresarial.</p>
        <p>Nuestra Red regional de Fibra Óptica redundante y nuestra infraestructura tecnológica, nos permite brindar servicios de telecomunicaciones con los niveles de sostenibilidad más exigentes.</p>
        <p>Contamos con una estructura de servicios profesionales compuesta por el personal técnico de más alto nivel, especializados y certificados en cada una de las líneas de productos de tecnología de última generación que ofrecemos a nuestros clientes.</p>
      </p>
      <button className="description__btn">Nuestros Servicios</button>
    </di>
    <di className="description__column">
      <img src={cables} />
    </di>
  </Container>
);

export default Banner;
