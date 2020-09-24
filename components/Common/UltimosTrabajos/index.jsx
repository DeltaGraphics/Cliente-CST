import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import card1 from '../../../assets/images/Card1.png';
import card2 from '../../../assets/images/Card2.png';
import card3 from '../../../assets/images/Card3.png';

import './styles.scss';

const UltimosTrabajos = () => {
  const cards = [{ images: card1, title: "Conectividad de red", date: "21 de septiembre 2020", link: "" }, { images: card2, title: "Conectividad de red", date: "21 de septiembre 2020", link: "" }, { images: card3, title: "Conectividad de red", date: "21 de septiembre 2020", link: "" }]

	return (
    <Container className="ultimos-trabajos">
			<p className="ultimos-trabajos__title">
				Nuestros Clientes
			</p>
			<div className="ultimos-trabajos__divider" />
      <div className="ultimos-trabajos__cards" >
      {cards.map(item => (
      <Card style={{ width: '350px' }}>
        <Card.Img style={{ width: '350px', height: '250px' }}variant="top" src={item.images} />
        <Card.Body>
        <Card.Title>{item.title}</Card.Title>
          <Card.Text>
           {item.date}
          </Card.Text>
          <Button variant="primary">Ver más</Button>
        </Card.Body>
      </Card>
      ))}
      </div>
    </ Container>
	);
};

export default UltimosTrabajos;
