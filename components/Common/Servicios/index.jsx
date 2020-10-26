import React from 'react';
import { Card } from 'react-bootstrap';
import icon1 from '../../../assets/images/icons/icon1.svg';
import icon2 from '../../../assets/images/icons/icon2.svg';
import icon3 from '../../../assets/images/icons/icon3.svg';
import icon4 from '../../../assets/images/icons/icon4.svg';
import icon5 from '../../../assets/images/icons/icon5.svg';
import icon6 from '../../../assets/images/icons/icon6.svg';
import icon7 from '../../../assets/images/icons/icon7.png';
import icon8 from '../../../assets/images/icons/icon8.svg';
import icon9 from '../../../assets/images/icons/icon9.svg';
import icon10 from '../../../assets/images/icons/icon10.png';
import icon11 from '../../../assets/images/icons/icon11.svg';
import icon12 from '../../../assets/images/icons/icon12.svg';

import './styles.scss';

const NuestrosServicios = () => {
  const services = [ { icon: icon1, title: "Control de Acceso" }, { icon: icon2, title: "Conectividad de Red" }, { icon: icon3, title: "Acceso a Internet" }, { icon: icon4, title: "Infraestructura de Red" }, { icon: icon5, title: "Seguridad de Red" }, { icon: icon6, title: "Cloud Services" }, { icon: icon7, title: "Control de Acceso" }, { icon: icon8, title: "Video Vigilancia" }, { icon: icon9, title: "Telefonía IP" }, { icon: icon11, title: "Servicios Gestionados" }, { icon: icon12, title: "Soporte de Tecnología" } ];

	return (
			<div className="nuestros-servicios">
				{services.map(item => (
        <Card className="nuestros-servicios__card" >
          <img src={item.icon} />
          <Card.Body>
            <Card.Text>
              {item.title}
            </Card.Text>
          </Card.Body>
        </Card>
				))}
			</div>
	);
};

export default NuestrosServicios;
