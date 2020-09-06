import React from 'react';
import { Container } from 'react-bootstrap';
import mail from '../../../assets/images/icons/mail-footer.svg';
import pin from '../../../assets/images/icons/pin-footer.svg';
import phone from '../../../assets/images/icons/phone-footer.svg';

import './styles.scss';

const form = [ "Nombre", "Apellido", "Correo", "Telefono", "Asunto" ];

const contacto = [
	{ info: '<p><p>Escribenos</p> <p>info@solucionescentral.com</p></p>', icon: mail },
	{ info: '<p><p>Calle Los Laureles, La Vega,</p> <p>Republica Dominicana</p></p>', icon: pin },
	{ info: '<p><p>Llamanos</p> <p>1 809-125-4567</p></p>', icon: phone },
];

const Contactanos = () => (
  <Container className="contactanos-hero">
    <ul className="contactanos-hero__first-column">
      {form.map(item => (
        item === 'Asunto'
        ? (<li><span>{item}</span><textarea /></li>)
        : (<li><span>{item}</span><input /></li>)      
      ))}  
    </ul>
    <ul className="contactanos-hero__second-column">
      {contacto.map(item => (
        <li className="contactanos-hero__second-column__item">
          <img src={item.icon} />
          <div className="" dangerouslySetInnerHTML={{ __html: item.info }} />
        </li>
      ))}
    </ul>
  </Container>
);

export default Contactanos;
