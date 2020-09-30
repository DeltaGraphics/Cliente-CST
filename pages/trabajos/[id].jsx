import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import NavBar from '../../components/Common/Navbar';
import Menu from '../../components/Common/Menu';
import Banner from '../../assets/images/trabajos-single-page.png';
import minimi from '../../assets/images/hero-portafolio.jpg';
import Footer from '../../components/Common/Footer';
import WorkProfile from '../../components/Common/WorkProfile';

import '../../assets/stylesheets/site.scss';
import './styles.scss';

const Trabajo = (props) => {
	const images = [ { img: minimi, id: "[minimi1]",  images: [ minimi, minimi, minimi ], title: "Eastwood Center", content: "<p>Eastwood Center is a 46-story glass and steel, 858,000 square foot commercial office building for Eastwood, Ltd.</p><p>The building was built within and above the original six-story Eastwood office building. The 1928 landmark façade was restored and integrated with the tower. The structural frame, standing 598 feet tall, is enclosed with a panelized glass curtain wall system and stainless steel diagrid cladding.</p>", description: "<ul><li>Cliente: <span>Eastwood Ltd.</span></li><li>Tipo de trabajo: <span>Eastwood Ltd.</span></li><li>Ubicacion: <span>Eastwood Ltd.</span></li><li>Servicio: <span>Eastwood Ltd.</span></li></ul>"}, { img: minimi, id: "[minimi2]" },  { img: minimi, id: "[minimi3]" }, { img: minimi, id: "[minimi4]" }, { img: minimi, id: "[minimi5]" }, { img: minimi, id: "[minimi6]" }, { img: minimi, id: "[minimi7]" }, { img: minimi, id: "[minimi8]" }, { img: minimi, id: "[minimi9]" }, { img: minimi, id: "[minimi10]" }, { img: minimi, id: "[minimi11]" }, { img: minimi, id: "[minimi12]" }, { img: minimi, id: "[minimi13]" } ]
  

	return (
    <Fragment>
      { images.map( item => {
        return (
        (props.router.query.id === item.id 
          ? 
        <>
        <NavBar />
        <Menu />
        <div className="portafolio-single-page__image" >
        <img src={Banner} />
        </div>
          <WorkProfile data={item}/>
        <Footer />
        </>
        : ""
          )
        )
      })}
    </Fragment>
  );

};

export default withRouter(Trabajo);