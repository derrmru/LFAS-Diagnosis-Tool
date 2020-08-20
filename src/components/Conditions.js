import React from "react";
import '../style/App.css';

const Conditions = (props) => {
    return (
        <div className="conditions">
            <div className="conditions-header">
                <h1>London Foot & Ankle Surgery</h1>
                <h2>Conditions</h2>
            </div>

            <div className="condition-container">
                <h3 className="condition-title">{props.view.title}</h3>
                <div className="condition-paragraphs">
                    {props.view.description}
                </div>
            </div>
        </div>
    )
}

export default Conditions;