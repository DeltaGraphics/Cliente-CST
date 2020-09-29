import React from 'react';
import hero from '../../../assets/images/hero.jpg';
import giga from '../../../assets/images/gigabit.jpg';
import code from '../../../assets/images/code.jpg';
import cables from '../../../assets/images/cables.jpg';
import minimi from '../../../assets/images/hero-portafolio.jpg';
import buildings from '../../../assets/images/nostrosbanner.png'
import main from '../../../assets/images/maintenance.jpg';

import './styles.scss';

const NuestrosTrabajos = () => {
  const images = [ minimi, buildings, main, hero, giga, code, cables, hero, giga, code, cables, giga ];
  const filters = ["Todos", "Conectividad de Red", "Acceso a Internet", "Infraestructura de Red", "Seguridad de Red", "Control de Acceso", "Video Vigilancia"]
  const filters2 =  ["Telefonía IP", "Servicios de Call Center", "Servicios Gestionados", "Cloud Services", "Desarrollo y Gestión de Sistemas Soporte de Tecnología", "Domótica y Automatización"]

	return (
		<a href="/portafolio" className="nuestros-trabajos">
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
					<>
					<div className="nuestros-trabajos__img">
						<img src={item} />
						<p className="nuestros-trabajos__text">Ver más</p>
					</div>
					</>
				))}
			</div>
		</a>
	);
};

export default NuestrosTrabajos;
