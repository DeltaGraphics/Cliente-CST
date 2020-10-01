import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Gallery from './gallery';

import './styles.scss';

const WorkProfile = (props) => {
  const { data } = props;

  return (
    <Container className="work-profile">
      <di className="work-profile__column">
        <p className="work-profile__title" >{data.title}</p>
        <div className="work-profile__description" dangerouslySetInnerHTML={{ __html: data.content }} />
        <div className="work-profile__description" dangerouslySetInnerHTML={{ __html: data.description }} />
      </di>
      <div className="work-profile__column">
        <img className="work-profile__column-img" src={data.img} />
        <Gallery data={data.images}/>
      </div>
    </Container>
  )
};

export default WorkProfile;
