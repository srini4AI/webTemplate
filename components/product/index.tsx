import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from './product.module.css';
import Image from 'next/image'
export const ProductPortfolio = () =>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 1300,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
              }
          },
          {
            breakpoint: 800,
            settings: {
                slidesToShow:3,
                slidesToScroll: 3,
            }
        },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }]
      };
    return( <><Slider {...settings}>
        <div className={`${'card'} ${Styles.cardSlick}  ${'text-center'}`}>
        <Image src="/images/150.png"  width="250"  height="150"
        className={Styles.cardImageTop} alt="..."/>
          <div className="card-body">
    <h5 className="card-title">X-Ray Baggage Scanners</h5>
    <p className="lead">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" className="btn btn-primary">Explore</a>
  </div>
        </div>
        <div   className={`${'card'} ${Styles.cardSlick}  ${'text-center'}`}>
        <Image src="/images/150.png"   width="250"  height="150"
        className={Styles.cardImageTop} alt="..."/>
         <div className="card-body">
    <h5 className="card-title">Explosive Trace Detectors</h5>
    <p className="lead">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" className="btn btn-primary">Explore</a>
  </div>
        </div>
        <div   className={`${'card'} ${Styles.cardSlick}  ${'text-center'}`}>
        <Image src="/images/150.png" height="150" className={Styles.cardImageTop} alt="..."   width="250"/>
        <div className="card-body">
    <h5 className="card-title">Door Frame Metal Detectors</h5>
    <p className="lead">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" className="btn btn-primary">Explore</a>
  </div>
        </div>
        <div   className={`${'card'} ${Styles.cardSlick}  ${'text-center'}`}>
        <Image src="/images/150.png"  height="150"   width="250"  className={Styles.cardImageTop} alt="..."/>
        <div className="card-body">
    <h5 className="card-title">Hand Held Metal Detectors</h5>
    <p className="lead">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" className="btn btn-primary">Explore</a>
  </div>
        </div>
        <div   className={`${'card'} ${Styles.cardSlick} ${'text-center'}`}>
        <Image src="/images/150.png"   height="150"   width="250" className={Styles.cardImageTop} alt="..."/>
        <div className="card-body">
    <h5 className="card-title">Vehicle Mounted X-Ray Baggage Scanners</h5>
    <p className="lead">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" className="btn btn-primary">Explore</a>
  </div>
        </div>

      </Slider></>);
}