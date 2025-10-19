import React, { useState } from "react";
export default function Inst() {
    const [instlist, setInstlist] = useState(false);
    function toggleInst() {
        setInstlist(!instlist);
    }
    return (
        <div className="instruction">
            <div
                className="dropdown"
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={toggleInst}>
                <h3 className="insthead">Instructions to Use Serenify</h3>
                <span className="instarrow" style={{ marginLeft: "8px" }}>
                {instlist ? "▲" : "▼"}
                </span>
            </div>

            {instlist && (
            <ol className="instlist">
            <li>Choose the issue you want to address by clicking on the respective image.</li>
            <li>Fill in the required details in the form that appears below the images.</li>
            <li>Click on the "Start The Therapy!" button to initiate the therapy session.</li>
            <li>Follow the prompts and instructions provided during the therapy session for optimal results.</li>
            <li>Make sure to provide accurate information to tailor the therapy to your needs.</li>
            <li>Enjoy your personalized therapy experience with Serenify!</li>
            </ol>
            )}
        </div>
    );
}
