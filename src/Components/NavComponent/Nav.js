import React from 'react';
import {Component} from 'react';
import {navItems} from './NavItems.js';
import './Nav.css';


class Nav extends Component{
    state = {clicked: false}

    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
        return(
            <div className="NavContainer">
                <div className="LogoContainer">
                    <p>LAKAVELI</p>
                </div>
                <div className="MenuContainer">
                    <div className="hamburguer" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars" } ></i>
                    </div>
                    <div onClick={this.handleClick}>
                        <div className={this.state.clicked ? "NavList": "noNavList" }>
                        <ul className="NavList">
                        {navItems.map((item, index)=> {
                            return (
                            <li className="List">
                                <a href={item.url}>{item.title}</a>
                            </li>
                            )
                        })
                        }
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;