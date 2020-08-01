import React from 'react';
import Link from 'next/link';
import { Container, Navbar } from 'react-bootstrap';
import Logo from '../../../assets/images/logos/LogoFinal.png';

import './styles.scss';

const Menu = () => {

    const data = [ { text: "Inicio", link: "/" }, { text: "Nosotros", link: "/nosotros" }, { text:  "Servicios", link: "/servicios" }, { text: "Portafolio", link: "/portafolio" }, { text: "Contacto", link: "/contacto" }];

	return (
        <Navbar className="menu__container" expand="lg" variant="light" bg="light">
        <Container className="menu">
           <img className="menu__icon" src={Logo}/>
           <ul className="menu__list">
               {data.map(item => (
                   <Link href={item.link}>
                    {item.text}
                 </Link>
               ))}
           </ul>
        </Container>
      </Navbar>
	);
};

export default Menu;
