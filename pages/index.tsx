
import React from 'react'
import { NavBarHeader } from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BannerCarousel } from '../components/carousels';
import styles from '../styles/Home.module.css'
import { ProductPortfolio } from '../components/product';
const Home = () => {
  return (
    <>
   <NavBarHeader></NavBarHeader>
   
   <div id="wrapper" >
   <header>
   <BannerCarousel></BannerCarousel>
   <div className={styles.textWhite}>
   <svg className={styles.svgBannerBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor"><polygon _ngcontent-vis-c41="" points="0,100 100,0 100,100"></polygon></svg>
   </div>
   </header>

   {/*  Level11 */}

 
   </div>
   <section className="p-5 bg-light"  id="content-map">
   <div className="container"><div className="row justify-content-center"><div className="col-lg-7 text-center"><h2 className="mb-3">We build it, you rock it!</h2><p className="lh-190 text-muted">Start focusing on your golas, by spending less time creating pages using our examples.</p><div className="mt-4"><a href="https://themes.getbootstrap.com/product/quick-website-ui-kit-2/" className="btn btn-primary btn-icon my-2" target="_blank" rel="noreferrer"><span className="btn-inner--text">Purchase now</span> <span className="btn-inner--icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> </span></a>&nbsp;&nbsp;<a className="btn btn-dark my-2 d-none d-sm-inline-block" href="overview.html">See all Pages</a></div></div></div></div>
   </section>

     <div id="home-map">
   <div className="block slant-color-blue bg-color-blue">
			<div className="container">
				<div className="row">
					<div className="col text-center">
						<h2 className="display-4">Installations & After-Sales Service support by ECIL Rapiscan Limited</h2>
            <p>We are Leaders in Industry 25+ Years</p>
					</div>
				</div>
				
				<div id="global-map">
				
				<div className="row justify-content-md-center">

							<div className="col-6 col-lg-2 col-sm-4">
								<h1>4966+</h1>
								<div className="clearfix"></div>
								<p className="uppercase ">X-RAY BAGGAGE SCANNERS</p>
							</div>
							
							<div className="col-6  col-lg-2  col-sm-4">
								<h1>7652+</h1>
								<div className="clearfix"></div>
								<p className="uppercase ">DOOR FRAME METAL DETECTORS</p>
							</div>
							
							<div className="col-6  col-lg-2  col-sm-4">
								<h1>170+</h1>
								<div className="clearfix"></div>
								<p className="uppercase ">COUNTRIES SUPPLIED</p>
							</div>
							
							<div className="col-6  col-lg-2  col-sm-4">
								<h1>3711+</h1>
								<div className="clearfix"></div>
								<p className="uppercase ">EXPLOSIVE DETECTORS</p>
							</div>
							
							<div className="col-6  col-lg-2  col-sm-3">
								<h1>1720+</h1>
								<div className="clearfix"></div>
								<p className="uppercase ">VEHICLE MOUNT SCANNERS</p>
							</div>
				

					
				</div>				


				
			</div>



				</div>
			</div>
      </div>
      <div id="product-map">
   
   </div>
      {/* End  */}
   <div id="wrapper">

   <section className="bg-light p-3 m-4">
      <div className="container"><div className="row justify-content-center"><div className="col-lg-7 text-center"><h2 className="mb-5">Products</h2></div></div></div>
        <ProductPortfolio></ProductPortfolio>
      </section>
      </div>
   
   <footer className="position-relative" id="footer-main">
   <div className={`${'footer pt-lg-7 bg-dark'} ${styles["footerDark"]}` }>
      <div className="shape-container shape-line shape-position-top shape-orientation-inverse">

      </div>
      <div className="container pt-4">
        
         <div className="row">
            <div className="col-lg-5 mb-5 col-12 mb-lg-0">
               <a href="index.html"><div className={styles.logoNav}><img src="/images/rapiscan_ltd_1.png" width="75"/><h4> ESIL - Rapiscan Ltd</h4></div></a>
               <h6 className="heading m-3">Corporate Office</h6>
               <p className={`${"m-3"} ${styles.addressBox}`}>8-1-305 & 306, 6th Floor, Unit-2, Anand Silicon Chip, Shaikpet,
               Tolichowki, Hyderabad – 500 008, Telengana, India. 040 6700 0800</p>
               <ul className="nav mt-4">
                  <li className={styles.navItem}><a className={`${styles.navLink} pl-0`} href="https://dribbble.com/webpixels" target="_blank" rel="noreferrer"><i className="fab fa-dribbble"></i></a></li>
                  <li className={styles.navItem}><a className={`${styles.navLink}`} href="https://github.com/webpixels" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
                  <li className={styles.navItem}><a className={`${styles.navLink}`} href="https://www.instagram.com/webpxs" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                  <li className={styles.navItem}><a className={`${styles.navLink}`} href="https://www.facebook.com/webpixels" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
               </ul>
            </div>
            <div className="col-lg-3 col-6 col-sm-6 ml-lg-auto mb-5 mb-lg-0">
               <h6 className="heading mb-3">Quick Links</h6>
               <ul className={`${styles.listunstyled}`}>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Who we are</a></li>
                  <li><a href="#">Clients</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Management</a></li>
               </ul>
            </div>
            <div className="col-lg-4 col-4 col-sm-4 mb-5 mb-lg-0">
               <h6 className="heading mb-3">About</h6>
               <ul className={`${styles.listunstyled}`}>
                  <li><a href="#">X-Ray Baggage Scanners</a></li>
                  <li><a href="#">Explosive Trace Detectors</a></li>
                  <li><a href="#">Door Frame Metal Detectors</a></li>
                  <li><a href="#">Hand Held Metal Detectors</a></li>
                  <li><a href="#">Vehicle Mounted X-Ray Baggage Scanners</a></li>
               </ul>
            </div>
        
         </div>
         <hr className="divider divider-fade divider-dark my-4"/>
         <div className="row align-items-center justify-content-md-between pb-4">
            <div className="col-md-6">
               <div className={`copyright font-weight-bold text-center ${styles.textmdleft} ${styles.textSm}`}>© 2021 
               <a href="https://webpixels.io" className={styles.fontweightbold} target="_blank" rel="noreferrer">ECIL Rapiscan Limited</a>. All rights reserved</div>
            </div>
            <div className="col-md-6">
               <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                  <li className={styles.navItem}><a className={styles.navLink} href="#">Terms</a></li>
                  <li className={styles.navItem}><a className={styles.navLink} href="#"> Privacy</a></li>
                  <li className={styles.navItem}><a className={styles.navLink}  href="#"> Cookies</a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</footer>
   </>
  )
}

export default Home
