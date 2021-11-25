import React from 'react';
import "./Home.css";
import imagem1 from '../assets/imagem1.png';
import imagem2 from '../assets/imagem2.png';
import imagem3 from '../assets/imagem3.png';
import {Link} from "react-router-dom"
import Footer from './Footer/Footer';

// import { Container } from './styles';

function Home() {
  return (
  <div className="corpo">
    <div className="content">
            <div className="slides">
                <input className="slide-input" type="radio" checked name="slide" id="slide1"/>
                <input className="slide-input" type="radio" name="slide" id="slide2"/>
                <input className="slide-input" type="radio" name="slide" id="slide3"/>

                <div className="slide s1">
                <Link to="/gallery">
                    <img src={imagem1} alt=""/>
                </Link>
                </div>
                <div className="slide">
                <Link to="/gallery">
                    <img src={imagem2} alt=""/>
                </Link>
                </div>
                <div className="slide">
                    <img src={imagem3} alt=""/>
                </div>
                <div className="navigation">
                    <label className="bar" for="slide1"></label>
                    <label className="bar" for="slide2"></label>
                    <label className="bar" for="slide3"></label>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Home;