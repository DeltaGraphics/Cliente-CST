import React from 'react';
import { Container } from 'react-bootstrap';
import Location from '../../../assets/images/location.png';
import GoogleMaps from '../GoogleMap';

import './styles.scss';

const form = [ "Nombre Completo", "Telefono", "Correo", "Asunto" ];

const Contactanos = () => (
  <Container className="contactanos-hero">
    <ul className="contactanos-hero__first-column">
    <p className="contactanos-hero__title">Déjanos un mensaje</p>
      {form.map(item => (
        item === 'Asunto'
        ? (<li><textarea placeholder={item} /></li>)
        : (<li><input placeholder={item} /></li>)      
      ))}
      <button>Enviar</button>  
    </ul>
    <GoogleMaps className="contactanos-hero__map" />
  </Container>
);

export default Contactanos;
