import React, { useState } from "react";
import LogoImage from '../2d-images/Logo.svg';
import HeaderItems from "./HeaderItems";

let Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="header">
            <img src={LogoImage} className="header-logo" alt="Logo for the London Foot & Ankle Surgery" />
            
            <div className="contact-container">
                <HeaderItems />
            </div>

            <div className="mobile-menu-toggle" onClick={() => setToggleMenu(!toggleMenu)}>
                <div>
                    {toggleMenu ? "|X|" : <p><u>Get In Touch</u></p>}
                </div>
            </div>

            {
            toggleMenu && 
                <div className="mobile-contact-container fade-in">
                    <HeaderItems />
                </div>
            }   
        </div>
    )
}

export default Header;