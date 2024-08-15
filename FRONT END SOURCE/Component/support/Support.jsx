import react from 'react';
import customer from "./customer.jpg"
import drive from "./drive.png"
import enter from "./enter.jpg"
import lorry from "./lorry.jpg"

import './support.css';
import Footer from '../footer/Footer';

const Data =[
    {
        id:1,
        img:customer,
        title:'CUSTOMER SUPPORT',
        desc:"For support with your bookings and other queries, email us at help@ecoconnect.ac.in inor call us on022 4410 4410"
    },
    {
        id:2,
        img:drive,
        title:'RAG PICKER',
        desc:"For queries and support regarding your house shifting booking, email us at pickersupport@ecoconnect.ac.in inor call us on022 4410 4444or022 6268 4444"
    },
    {
        id:3,
        img:enter,
        title:'ENTERPRISE SERVICES',
        desc:"If you are an enterprise client and have pulk rags,Click hereor mail us help@ecoconnect.ac.in."
    },
    {
        id:4,
        img:lorry,
        title:'DRIVE WITH ECOCONNECT',
        desc:"Are you a rag picker? Increase your earnings by partnering with us. Click here or reach us out on 022 4410 4410(add your city code)"
    },
]
export const Support =()=>{

    return(
        <section className='support-main' id='contact'>
            <div className="title">
                <h1>HELP CENTER</h1>
                <p>Need assistance? We&apos;re happy to help, reach us out through the appropriate channels below.</p>
            </div>
               
            <div className="support">
            {Data.map((id, index) => {
                return(
                    
                     <div  key ={index} className="task">
                      <div className="col1">
                          <img src={id.img} alt="" />
                      </div>
                      <div className="col2">
                        <h4>{id.title}</h4>
                        <p>{id.desc}</p>
                      </div>
                     </div>
                );
                })}
            </div>

            <div className="office">
                <h1>Head Office</h1>
                <br />
                <h2>Coimbatore</h2>
                <br />
                <p>Eco Connect Head Office, BCM Prime 1st Cross,<br /> BDA Layout, Ghandhipuram Main Rd, New <br /> Ramanathapuram,Ghandhipuram Extension,<br />  Coimbatore, TamilNadu 641008</p>
                <br />
                <a href="https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu/@11.0139578,76.8848334,12z/data=!3m1!4b1!4m6!3m5!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!8m2!3d11.0168445!4d76.9558321!16zL20vMDE5ZmM0?entry=ttu" target="-blank">
                Get Direction &gt;
                </a>
            </div>
            <Footer />
        </section>
    )
}