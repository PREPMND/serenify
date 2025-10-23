import React from 'react';
import ReactDOM from "react-dom/client";
import Results from "./results.jsx"
export default function Alz (){

    function getstart(e){
        e.preventDefault();
        const newWindow = window.open("", "_blank");
        const div = newWindow.document.createElement("div");
        newWindow.document.body.appendChild(div);
        newWindow.document.body.style.margin = "0";
        newWindow.document.body.style.background = "linear-gradient(180deg, #fff6fa,rgb(121, 26, 203))";
        ReactDOM.createRoot(div).render(<Results />);
    }
    
    return(
        <>
        <h3 className="fill">Fill The Desired Details</h3>
        <form className="ques"  onSubmit={getstart}>
            <label className="label">Name:</label>
            <input className="name" name="nme" type="text" placeholder="Name" required/>
            <label className="label">Age:</label>
            <input className="age"  type="number" placeholder="Age" required/>
            <label className="label">Email:</label>
            <input className="email" type="email" placeholder="Email" required value="l@l" />
            <label className="label">Hobbies:</label>
            <input className="hobbies" type="text" placeholder="Hobbies .ie Gardening,Swimming" required></input>
            <label className="label">Past Activities:</label>
            <input className="past-act" type="text" placeholder="Past Activities " required></input>
            <label className="label">Favorite Places:</label>
            <input className="places" type="text" placeholder="Favorite Places" required></input>
            <label className="label">Colors You Find Soothing:</label>
            <input className="color" type="text" placeholder=".ie red,green,blue OR any way you describe it" required></input>
            <button className="smb" >Start The Therapy!</button>
        </form>
        </>
    )
}

