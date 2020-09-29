import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import LogoCentral from '../../../assets/images/logos/logo-central.svg';
import LogoMicrovision from '../../../assets/images/logos/logo-microvision.svg';
import LogoReady from '../../../assets/images/logos/logo-ready.svg';
import LogoVallevision from '../../../assets/images/logos/logo-vallevision.svg';
import LogoVillatapia from '../../../assets/images/logos/logo-villatapia.svg';
import AirComunication from '../../../assets/images/logos/air-comunication.svg';
import LogoTCCStg from '../../../assets/images/logos/logo-TCC-Santiago.svg';
import LogoTCC from '../../../assets/images/logos/logo-TCC.svg';
import LogoHMHG from '../../../assets/images/logos/logo-H-M-H-G.svg';
import ConexionesPlus from '../../../assets/images/logos/conexiones-plus.svg';

import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.scss';
 
const data = [ LogoCentral, LogoMicrovision, LogoReady, LogoVallevision, LogoVillatapia, AirComunication, LogoTCCStg, LogoTCC, LogoHMHG, ConexionesPlus ];
 
class Gallery extends React.Component {
  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: { 0: { items: 7 } },
    galleryItems: this.galleryItems(),
  }
  galleryItems() {
    return data
      .map((item, i) => <img src={item} className="carousel__single-img" />)
  }
 
  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide
    this.setState({ currentIndex })
  }
 
  slideNextPage = () => {
    const {
      itemsInSlide,
      galleryItems: { length },
    } = this.state
    let currentIndex = this.state.currentIndex + itemsInSlide
    if (currentIndex > length) currentIndex = length
 
    this.setState({ currentIndex })
  }
 
  handleOnSlideChange = (event) => {
    const { itemsInSlide, item } = event
    this.setState({ itemsInSlide, currentIndex: item })
  }
 
  render() {
    const { currentIndex, galleryItems, responsive } = this.state
 
    return (
      <div>
        <AliceCarousel className="carousel"
          // dotsDisabled={true}
          buttonsDisabled={true}
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          autoPlay={true}
          fadeOutAnimation={true}
          mouseTrackingEnabled={true}
          disableAutoPlayOnAction={true}
          items={galleryItems}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
        />
      </div>
    )
  }
}

export default Gallery