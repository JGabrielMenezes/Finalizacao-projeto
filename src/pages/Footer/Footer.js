import React from "react";
import { ReactDOM } from "react";
import '../Footer/Footer.css'
import fotofooter from '../../assets/fotofooter.png'
import {Link} from "react-router-dom"

export default class Footer extends React.Component {

    render(){
        return(
            <div className="Footer">
                <img className="fotofooter" src={fotofooter} alt=""></img>
                <div className="Footer2">
                <div>
                <h2>Contacte-nos</h2> <br/>
                </div>

                <div className="box1">
                <h4>Telefone</h4>
                <h5>(81) 98585-8585</h5>
                </div>
                <div className="box2">
                <span className="span1"><h4>Instagram</h4></span>
                <h5>@adoteumgatinho</h5>
                </div>

                <div className="box3">
                <span className="span2"><h4>E-mail:</h4></span>
                <h5>adoteumgatinho@gmail.com</h5>
                </div>
                </div>
            </div>
        )
    }
}
