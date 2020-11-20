import React, { useState } from 'react'
import { container, navBar, navLink, loginButton, loginButtonStyle } from './style';

const Home = () => {

    const [isLogin, setIsLogin] = useState<boolean>(false);
    const buttonName = 'Sign In';
    const logo = require('../../assets/images/logo/logo.png');

    const handleButton = () => {
        alert('Welcome !!');
        setIsLogin(true);
    }


    return (
        <div style={container}>
           <nav style={navBar}>
                <div>
                    <a href="#" style={navLink}>
                        <img src={logo} alt="" width="80px" height="80px"/>
                    </a>
                </div>
           
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <a href="#" style={navLink}>Register</a>
                    <a href="#" style={navLink}>Service</a>
                    <a href="#" style={navLink}>Contact</a>
                    <a href="#" style={navLink}>Sign Up</a>
                    <div style={loginButton}>
                        {!isLogin && 
                            <button style={loginButtonStyle} onClick={handleButton}>{buttonName}</button>
                        }
                    </div>
                </div>
            
           </nav> 
        </div>
    )
}

export default Home