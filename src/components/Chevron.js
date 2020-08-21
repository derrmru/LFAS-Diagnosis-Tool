import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

let Chevron = () => {
    return (
            <div className="chevron">
                <AnchorLink offset='50' href='#container'>
                    <div>
                        ^
                    </div>
                </AnchorLink>
            </div>
    )
}

export default Chevron;