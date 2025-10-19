import React, { useEffect } from "react";
import aut from "./assets/autism.png"
import dys from "./assets/dyslex.png"
import alz from "./assets/alz.png"
import backdys from "./assets/dys-back.jpg"
import Alz from "./ques.jsx"
import Dys from "./dsx.jsx"
import Dem from "./dem.jsx"
export default function Body(){
    const [selected, setselected]=React.useState(null);
    const [showArrow, setshowArrow]=React.useState(false);
    const [progress, setProgress]=React.useState(0);
    const handleSelect = (issue)=>{
        setselected(issue);
        setshowArrow(true);
        setProgress(0);
    }
    return(
    <>
        <div className="issue">
            <div className="issue-1">
                <img src={dys} alt="dyslexia"
                onClick={()=>setselected("dyslexia")}
                ></img>
                <h3>Dyslexia</h3>
            </div>
            <div className="issue-2">
                <img src={alz} alt="alzheimer's"
                onClick={()=>setselected("alzheimers")}
                ></img>
                <h3>Alzheimer's</h3>
            </div>
            <div className="issue-3">
                <img src={aut} alt="Dementia"
                onClick={()=>setselected("Dementia")}
                ></img>
                <h3>Dementia</h3>
            </div>

        </div>
        
        <div style={{marginTop:"30px"}}>
            {selected === "alzheimers" && <Alz/>}
            {selected === "dyslexia" && <Dys/>}
            {selected === "Dementia" && <Dem/>}
        </div>
        <div className="extras">
            <h2 id="one">Let’s create something peaceful, just for you <span>🌸</span></h2>
            <div className="loop">
                <div className="loopcontain">
                <div className="alz-q">
                    <h2 id="two">Alzheimers</h2>
                    <div id="three">These questions will help us create visuals that connect with your memories and calm your mind.</div>
                </div>
                <div className="dys-q">
                    <h2 id="two">Dyslexia</h2>
                    <div id="three">These questions will help us create visuals that connect with your memories and calm your mind.</div>
                </div>
                <div className="dem-q">
                    <h2 id="two">Dementia</h2>
                    <div id="three">This will help us design visuals that make you feel safe, familiar, and peaceful.</div>
                </div>
     
                <div className="alz-q">
                    <h2 id="two">Alzheimers</h2>
                    <div id="three">These questions will help us create visuals that connect with your memories and calm your mind.</div>
                </div>
                <div className="dys-q">
                    <h2 id="two">Dyslexia</h2>
                    <div id="three">These questions will help us create visuals that connect with your memories and calm your mind.</div>
                </div>
                <div className="dem-q">
                    <h2 id="two">Dementia</h2>
                    <div id="three">This will help us design visuals that make you feel safe, familiar, and peaceful.</div>
                </div>
            </div>
        </div>
        </div>

    </>
    );
}
