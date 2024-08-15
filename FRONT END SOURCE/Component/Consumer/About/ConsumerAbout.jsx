import React from "react";
import './consumerAbout.css';
import img from './small.jpg';

import Footer from "../Footer/Footer";

const ConsumerAbout = () => {
    return (
        <section>
            <div className="title">
                
                <h2>ABOUT US</h2>
                
            </div>
            <div className="contant1">
                <div className="col1">
                    <p>EcoConnect started off as a platform to address inefficiencies in the last mile logistics sector and transform the 
                        way goods are transported around cities, enabling lakhs of businesses move anything on-demand. We’ve grown manyfold since then,
                         positively impacting the productivity of businesses,
                         creating tremendous value for our partner-drivers and delivering happiness to a growing list of 19 cities.</p>
                    <p>But our journey has just begun, our goal is to to deliver the world’s best end-to-end logistics platform 
                        and revolutionise the transport logistics sector.</p>
                </div>
                <div className="col2">
                     <img src={img} alt="" />
                </div>
            </div>
            <div className="contant2">
                <div className="col1">
                     <img src={img} alt="" />
                </div>
                <div className="col2">
                    <p>EcoConnect is strongly committed towards improving the quality of life of our partner drivers.
                     Our partners enjoy flexible working hours, increased earnings and an effective work life balance along with
                     additional benefits like discounted insurance and fuel costs.</p>
                    <p>We’ve also taken up a lot of community development initiatives like higher 
                        education grants and scholarships for the children of our partners, dedicated health care
                         assistance and vehicle leasing assistance.Governance</p>
                </div>
            </div>
            {/* <div className="footer">
                <h3 className="main">India&apos;s Largest Marketplace for Intracity Logistics | Revolutionizing one delivery at a time</h3>
            <ul>
                <li><h3>2014</h3>YEAR FOUNDED</li>
                <li><h3>8 Million+</h3>CUSTOMERS</li>
                <li><h3>1200+</h3>STRONG TEAM</li>
            </ul>
            <h2>JOIN ECO-CONNECT</h2>
            <br />
            <p>Help us build the smartest transport logistics platform in the world.</p>
            <br />
            <button>SEE OPEN POSITION</button>
            </div>
            <Footer /> */}
            <Footer />
        </section>
    );
};

export default ConsumerAbout;
