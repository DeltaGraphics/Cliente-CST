import React from 'react';
import { Container } from 'react-bootstrap';
import mail from '../../../assets/images/icons/mail.svg';
import pin from '../../../assets/images/icons/pin.svg';
import phone from '../../../assets/images/icons/phone.svg';
import time from '../../../assets/images/icons/time.svg';

import './styles.scss';

const contacto = [
	{ info: '<p><b>Estamos ubicados en: </b><p>Los Laureles, La Vega 41000</p></p>', icon: pin },
	{ info: '<p><b>Escribenos a: </b> <p>info@solucionescentral.com</p></p>', icon: mail },
  { info: '<p><b>Llamanos a: </b><p>1 809-125-4567</p><p>1 809-125-4567</p></p>', icon: phone },
  { info: '<p><b>Horario: </b><p>L/V 8:00am a 6:00pm</p><p>S/D 8:00am a 6:00pm</p></p>', icon: time }
];

const Banner = () => (
  <Container className="contacto-card">
		<div className="contacto-card__content" >
    <ul className="contacto-card__list">
      {contacto.map(item => (
        <li className="contacto-card__list__item">
          <img src={item.icon} />
          <div className="contacto-card__list__item-info" dangerouslySetInnerHTML={{ __html: item.info }} />
        </li>
      ))}
    </ul>
		</div>
  </Container>
);

export default Banner;
