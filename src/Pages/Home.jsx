import React from 'react'
import logo from '../assets/logo.jpg'
import homeimg from '../assets/home.webp'
import aboutimg from '../assets/about.jpg'
import powerimg from '../assets/power.jpg'
function Home() {
    return (
        <div style={{ marginTop: '40px' }} className='container '>
            <div className='text-center'><img height='150px' src={logo} alt="" /></div>
            <h2 style={{ lineHeight: "10px" }} className='text-center'>AAYURDARSHAN</h2>
            <h5 className='text-center'>Kerala Ayurvedic center</h5>
            <hr />
            <div className='row' style={{ borderRadius: "50px" }}>
                <div className="col-lg-8 p-2">
                    <h3>Ayurveda</h3>
                    <p style={{textAlign:'justify'}}>Ayurveda, originating in ancient India, is a holistic system of medicine focused on achieving balance and harmony within the body, mind, and spirit. It emphasizes natural remedies, personalized diet, lifestyle practices, and herbal treatments to promote overall well-being and prevent illness. Ayurveda views each person as a unique combination of elements (doshas) and aims to restore balance to optimize health.</p>
                </div>
                <div className="col-lg-4 p-2">    <img width="100%" height="200px" style={{ borderRadius: "10px" }} src={homeimg} alt="" />
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className="col-lg-4">
                    <img  style={{ borderRadius: "10px" }} width="100%" height="200px" src={powerimg} alt="" />
                </div>
                <div className="col-lg-8">
                    <h3 className='mt-3'>Power Of Ayurveda</h3>
                    <p style={{textAlign:'justify'}}>The power of Ayurveda lies in its holistic approach to health, addressing the root causes of imbalance rather than just symptoms. Through personalized treatments, herbal remedies, diet, and lifestyle adjustments, Ayurveda empowers individuals to achieve optimal wellness and prevent illness. Its ancient wisdom continues to offer profound healing benefits for modern living.</p>
                </div>
               


            </div>
            <hr />
                <div className='row' style={{ borderRadius: "50px" }}>
                <div className="col-lg-8 p-2">
                    <h3>About Us</h3>
                    <p style={{textAlign:'justify'}}>Welcome to Aayurdarshan, a beacon of Ayurvedic healing established in 1997. Nestled in the heart of tradition, our clinic offers a sanctuary for holistic wellness seekers. With expertise in Panchakarma, body relaxation, and wellness treatments, we harmonize ancient wisdom with modern comfort to guide you on your journey to optimal health and vitality.</p>
                </div>
                <div className="col-lg-4 p-2">    <img width="100%" height="200px" style={{ borderRadius: "10px" }} src={aboutimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home