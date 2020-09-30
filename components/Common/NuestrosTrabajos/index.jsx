import React from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import hero from '../../../assets/images/hero.jpg';
import giga from '../../../assets/images/gigabit.jpg';
import code from '../../../assets/images/code.jpg';
import cables from '../../../assets/images/cables.jpg';
import minimi from '../../../assets/images/hero-portafolio.jpg';
import buildings from '../../../assets/images/nostrosbanner.png'
import main from '../../../assets/images/maintenance.jpg';

import './styles.scss';

const NuestrosTrabajos = () => {
	const images = [ { img: minimi, images: [ minimi, minimi, minimi ], id: "minimi1", title: "Eastwood Center", content: "<p>Eastwood Center is a 46-story glass and steel, 858,000 square foot commercial office building for Eastwood, Ltd.</p><p>The building was built within and above the original six-story Eastwood office building. The 1928 landmark façade was restored and integrated with the tower. The structural frame, standing 598 feet tall, is enclosed with a panelized glass curtain wall system and stainless steel diagrid cladding.</p>", description: "<ul><li>Cliente: Eastwood Ltd.</li><li>Tipo de trabajo: Eastwood Ltd.</li><li>Ubicacion: Eastwood Ltd.</li><li>Servicio: Eastwood Ltd.</li></ul>"}, { img: minimi, id: "minimi1" },  { img: minimi, id: "minimi1" }, { img: minimi, id: "minimi1" }, { img: minimi, id: "minimi1" }, { img: minimi, id: "minimi1" }, { img: minimi, id: "minimi1" }, { img: minimi, id: "minimi1" }, { img: minimi, id: "minimi1" }, { img: minimi, id: "minimi1" }, { img: minimi, id: "minimi1" }, { img: minimi, id: "minimi1" } ]
	//{ img: buildings, }, main, hero, giga, code, cables, hero, giga, code, cables, giga ];
  const filters = ["Todos", "Conectividad de Red", "Acceso a Internet", "Infraestructura de Red", "Seguridad de Red", "Control de Acceso", "Video Vigilancia"]
  const filters2 =  ["Telefonía IP", "Servicios de Call Center", "Servicios Gestionados", "Cloud Services", "Desarrollo y Gestión de Sistemas Soporte de Tecnología", "Domótica y Automatización"]

	return (
		<Container className="nuestros-trabajos">
			<p className="nuestros-trabajos__title">
				Nuestros Trabajos
			</p>
      <div className="nuestros-trabajos__filters">{filters.map(item =>(
          <button>{item}</button>
      ))}</div>
       <div className="nuestros-trabajos__filters2">{filters2.map(item =>(
          <button>{item}</button>
      ))}</div>
			<div className="nuestros-trabajos__images">
				{images.map(item => (
					<Link href={{ pathname: "/trabajos/[id]", query: { id: item.id } }} as={`/trabajos/[${item.id}]`} >
					<div className="nuestros-trabajos__img">
						<img src={item.img} />
						<p className="nuestros-trabajos__text">Ver más</p>
					</div>
					</Link>
				))}
			</div>
		</Container>
	);
};

export default NuestrosTrabajos;
