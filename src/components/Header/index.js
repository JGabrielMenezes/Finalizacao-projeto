import React from 'react';
import fotologo from '../../assets/fotologo.png'
import {Link} from "react-router-dom"
import "./styles.css";

// import { Container } from './styles';

function Header() {
  return(
<>
<header className="header">
                <Link className="a1" to="/">
                <img className="foto1" src={fotologo} alt=""/>
                </Link>
                <nav>
                    <ul className="menu">
                        <li>
                          <Link  className="button-menu menu0" to="/">Home</Link>
                        </li>
                        <li>
                          <Link className="button-menu menu1" to="/gallery">Quero adotar</Link>
                        </li>
                    </ul>
                </nav>
            </header> 
</>
  );
}

export default Header;