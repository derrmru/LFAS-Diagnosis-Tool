import React, { useState } from "react";

let HeaderItem = (props) => {
    const [hover, setHover] = useState(false);

    return (
        <a className="header-links" href={props.link} target="_blank" rel="noopener noreferrer">
            <div 
                className="contact"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
            
                <div className="contact-text">| {hover ? props.fullTitle : props.title}</div>

            </div>
        </a>


    )
}

export default HeaderItem;