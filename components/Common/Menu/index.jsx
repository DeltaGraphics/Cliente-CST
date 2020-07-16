import React from 'react';
import Link from 'next/link';
import Logo from '../../../assets/images/logos/LogoFinal.png';

import './styles.scss';

const Menu = () => {

    const data = [ { text: "Inicio", link: "/"},{text: "Nosotros", link: "/nosotros"} , {text:  "Servicios", link: "/servicios"}, {text:  "Portafolio", link: "/portafolio"}, {text:  "Contacto", link: "/contacto"}];

	return (
        <div className="menu">
           <img className="menu__icon" src={Logo}/>
           <ul className="menu__list">
               {data.map(item => (
                   <Link href={item.link}>
                    {item.text}
                 </Link>
               ))}
           </ul>
        </div>
	);
};

export default Menu;
