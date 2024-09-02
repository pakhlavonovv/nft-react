import React from 'react'
import './sass/style.scss'
import Logo from './img/logo.png'

const Index = () => {
  return (
    <div>
        <header className='header'>
            <div className="container">
                <div className="header_wrapper">
                    <div className="header_logo">
                        <img src={Logo} alt="" />
                    </div>
                    <ul className="header_links">
                        <li className="header_items">
                            <a href="#">Marketplace</a>
                            <a href="#">Rankings</a>
                            <a href="#">Connect a wallet</a>
                            <button><i class="fa-regular fa-user"></i> <span>Sign Up</span></button>
                        </li>
                    </ul>
                    <div className="res-link">
                    <i class="fa-solid fa-bars" style={{color: "#ffffff"}}></i>
                    <i class="fa-regular fa-user" style={{color: "#ffffff"}}></i>
                    </div>
                </div>      
            </div>
        </header>
    </div>
  )
}

export default Index