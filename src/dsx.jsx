import ReactDOM from "react-dom/client";
import Results from "./results.jsx"
export default function Dys() {
    function getstart(e) {
        e.preventDefault();
        const newWindow = window.open("", "_blank");
        const div = newWindow.document.createElement("div");
        newWindow.document.body.appendChild(div);
        newWindow.document.body.style.margin = "0";
        newWindow.document.body.style.background = "linear-gradient(180deg, #fff6fa,rgb(121, 26, 203))";
        ReactDOM.createRoot(div).render(<Results />);
    }
    return (
        <>
            <h3 className="fill">Fill The Desired Details</h3>
            <form className="ques" onSubmit={getstart}>
                <label className="label">Name:</label>
                <input className="name" name="nme" type="text" placeholder="Name" required />
                <label className="label">Age:</label>
                <input className="age" type="number" placeholder="Age" required />
                <label className="label">Email:</label>
                <input className="email" type="email" placeholder="Email" required />
                <label className="label">Like Doing In Free Time:</label>
                <input className="hobbies" type="text" placeholder=".ie music,drawing" required />
                <label className="label">Would You Like Visuals That Motivate You:</label>
                <input className="moti-ys" type="text" placeholder="Yes Or No" required />
                <label className="label">Favorite Scenery:</label>
                <input className="scenery" type="text" placeholder=".ie sky,forest,beach,open fields" required></input>
                <label className="label">Preferred Relaxation Time:</label>
                <input className="time" type="text" placeholder=".ie morning,evening,night,afternoon" required></input>
                <button className="smb">Start The Therapy!</button>
            </form>
        </>
    )
}
