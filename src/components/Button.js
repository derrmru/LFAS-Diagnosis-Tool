import React from "react";

const Button = (props) => {
    return (
        <button 
                slot={props.slot} 
                data-position={props.position}
                data-normal={props.normal}
                onClick={() => props.toggle(props.title)}
              >
                {//If clicked annotation is shown
                props.annotation === props.title && <div id="annotation">
                  <strong>{props.title} Issues:</strong><br />
                    {
                        Object.keys(props.conditionObject).map((x, i) => <div key={i}>
                            <br />
                            <div onClick={() => props.toggleSetView(props.conditionObject[x])}>
                                {x}
                            </div>
                        </div>)}
                </div>
                }
        </button>
    )
};

export default Button;