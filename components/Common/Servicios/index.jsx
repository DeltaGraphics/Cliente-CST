import React from 'react';
import { Card } from 'react-bootstrap';
import icon1 from '../../../assets/images/icons/icon1.png';
import icon2 from '../../../assets/images/icons/icon2.png';
import icon3 from '../../../assets/images/icons/icon3.png';
import icon4 from '../../../assets/images/icons/icon4.png';
import icon5 from '../../../assets/images/icons/icon5.png';
import icon6 from '../../../assets/images/icons/icon6.png';
import icon7 from '../../../assets/images/icons/icon7.png';
import icon8 from '../../../assets/images/icons/icon8.png';
import icon9 from '../../../assets/images/icons/icon9.png';
import icon10 from '../../../assets/images/icons/icon10.png';
import icon11 from '../../../assets/images/icons/icon11.png';
import icon12 from '../../../assets/images/icons/icon12.png';

import './styles.scss';

const NuestrosServicios = () => {
  const services = [ { icon: icon1, title: "Control de Acceso", description: "<p>- Acceso en puertas con sistemas biométricos.</p><p>- Control de acceso fisio</p><p>- Control de asistencia empleados</p>" }, { icon: icon2, title: "Conectividad de Red", description: "<p>- Conectividad punto a punto y punto–multipunto</p><p>- Enlaces dedicados con Bandwidth garantizado de 1Mbps a 1Gbps<p/><p>- Presencia en todo el Cibao y la región Este desde Santo Domingo a Punta Cana</p>" }, { icon: icon3, title: "Acceso a Internet", description: "<p>- Conectividad a Internet con conexión Tier2 directamente al Backbone en Miami, FL</p><p>- Acceso con Bandwidth garantizado de 5Mbps hasta 1Gbps</p>" }, { icon: icon4, title: "Infraestructura de Red", description: "<p>- Servicios de diseño e implementación de proyectos integrados de Cableado Estructurado, Switching, Routing, Seguridad y Servidores.</p><p>- Acceso alámbrico e inalámbrico convergente</p><p>Soluciones de optimización de Red</p>" }, { icon: icon5, title: "Seguridad de Red", description: "<p>- Construcción de soluciones Firewall</p><p>- Diseño e implementación de seguridad computacional, control de acceso a la red, prevención de intrusiones, respuesta a incidentes, acceso remoto y seguridad de dispositivos terminales.</p>" }, { icon: icon6, title: "Cloud Services", description: "<p>- Alojamiento físico de servidores en nuestro Datacentrer</p><p>- Datacenter Virtualizado con gestión propia.</p><p>- Soluciones de Almacenamiento Unificado.</p><p>- Sistemas de Backup en la nube o en NAS físicos.</p>" }, { icon: icon7, title: "Control de Acceso", description: "<p>- Control de acceso Electrónico Biométrico</p><p>- Control de Asistencia de Empleados</p>" }, { icon: icon8, title: "Video Vigilancia", description: "<p>- Sistema de Video Vigilancia de Alta Definición (HD)</p><p>- Sistemas de Video Vigilancia por Red de Fibra Óptica</p><p>- Diseño e implementación de Centros de Monitoreo</p><p>Solución llave en mano desde el diseño, instalación, entrenamiento y puesta en servicio.</p>" }, { icon: icon9, title: "Telefonía IP", description: "<p>- Diseño e implementación de sistemas de comunicación unificada sobre IP</p><p>- Configuración de respuesta de voz interactiva</p><p>- Gestión de tonalidades SIP</p><p>- Servicios de Gestionados de Voz sobre IP</p>" }, { icon: icon10, title: "Domótica y Automatización", description: "<p>- Integración de sistemas de automatización y control inteligente en viviendas.</p><p>- Gestión inteligente y programación del encendido y apagado de iluminarias y <p>- electrodomésticos.</p><p>- Manejo de equipos multimedia (TV, Cajas de Telecable, Aires Acondicionado) desde el celular.</p>" }, { icon: icon11, title: "Servicios Gestionados", description: "<p>- 24/7 Service Operation Center</p><p>- Gestión de equipos de infraestructura de Red</p><p>- Routers, Switch’s, Firewall, Acces Point, Controller’s</p>" }, { icon: icon12, title: "Soporte de Tecnología", description: "<p>- Mesa de ayuda y Soporte de Tecnología</p><p>- Soporte a Servidores físicos, PC’s, cableado y equipos WLAN</p><p>- Configuración, instalación y administración de tecnologías de virtualización</p>" } ];

	return (
			<div className="nuestros-servicios">
				{services.map(item => (
        <Card className="nuestros-servicios__card" style={{ width: '25%' }}>
          <Card.Header className="nuestros-servicios__card-header"><p>{item.title}</p><img src={item.icon} /></Card.Header>
          <Card.Body>
            <Card.Text>
            <div className="nuestros-servicios__info" dangerouslySetInnerHTML={{ __html: item.description }} />
            </Card.Text>
          </Card.Body>
        </Card>
				))}
			</div>
	);
};

export default NuestrosServicios;
