import React, { Component } from 'react';
import logo from '../images/logo.png';
import {AiOutlineBars} from 'react-icons/ai';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    state = {isShow: false}
        handleToggle = () => {
            this.setState({isShow:!this.state.isShow})
        }
    render() {
        return (
            <nav className = 'navbar'>
                <div className = 'nav-center'>
                    <div className = 'nav-header'>
                        <Link to = '/'>
                            <img className='logo' src = {logo} alt='logo'/>
                        </Link>
                        <button 
                            type='button' 
                            className='nav-btn' 
                            onClick= {this.handleToggle}>
                            <AiOutlineBars className='nav-icon'/>
                        </button>
                    </div>
                    <ul className= {this.state.isShow ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <Link to = '/'>Home</Link>
                        </li>
                        <li>
                            <Link to = '/rooms'>Rooms</Link>
                        </li>
                        <li>
                            <Link to = '/services'>Services</Link>
                        </li>
                    </ul>
                </div>               
            </nav>
        )
    }
}
