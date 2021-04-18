import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import './mainPage.css';

class MainPage extends Component {
    render(){
        return(
            <div class="mainContainer">
                <div className="mainContent">
                <p className="header">HANDMADE</p>
                <p className="header2">CROCHETWEAR</p>
                <p>BY </p>
                <p>LAKAVELI</p>
                <button className="buyNowBtn">BUY NOW</button>
                </div>
            </div>
        )
    }
}

export default MainPage;