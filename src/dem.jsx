import ReactDOM from "react-dom/client";
import Results from "./results.jsx"
export default function Dem (){
    function getstart(e) {
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
        <form className="ques" onSubmit={getstart}>
            <label className="label">Name:</label>
            <input className="name" name="nme" type="text" placeholder="Name" required/>
            <label className="label">Age:</label>
            <input className="age"  type="number" placeholder="Age" required/>
            <label className="label">Email:</label>
            <input className="email" type="email" placeholder="Email" required/>
            <label className="label">Places You Feel Most Comfortable And Safe:</label>
            <input className="safe-places" type="text" placeholder=".ie holy places,hill-station,park,home" required></input>
            <label className="label">Do you prefer Bright & Cheerful Or  Soft & Calm:</label>
            <input className="bors" type="text" placeholder="Bright Or Soft/B Or S" required/>
            <label className="label">Favorite Scenery:</label>
            <input className="scenery" type="text" placeholder=".ie sky,forest,beach,open fields" required/>
            <label className="label">Preferred Color Tones:</label>
            <input className="color" type="text" placeholder=".ie red,green,blue OR any way you describe it" required></input>
            <button className="smb">Start The Therapy!</button>
        </form>
        </>
    )
}
