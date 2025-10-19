export default function Dem (){
    function startAI(formData){
        const nm=formData.get("nme")
        alert("Starting "+nm);
    }
    return(
        <>
        <h3 className="fill">Fill The Desired Details</h3>
        <form className="ques" action={startAI}>
            <label className="label">Name:</label>
            <input className="name" name="nme" type="text" placeholder="Name" required/>
            <label className="label">Age:</label>
            <input className="age"  type="number" placeholder="Age" required/>
            <label className="label">Email:</label>
            <input className="email" type="email" placeholder="Email" required></input>
            <label className="label">Places You Feel Most Comfortable And Safe:</label>
            <input className="safe-places" type="text" placeholder=".ie holy places,hill-station,park,home" required></input>
            <label className="label">Do you prefer Bright & Cheerful Or  Soft & Calm:</label>
            <input className="bors" type="text" placeholder="Bright Or Soft/B Or S" required></input>
            <label className="label">Favorite Scenery:</label>
            <input className="scenery" type="text" placeholder=".ie sky,forest,beach,open fields" required></input>
            <label className="label">Preferred Color Tones:</label>
            <input className="color" type="text" placeholder=".ie red,green,blue OR any way you describe it" required></input>
            <button className="smb">Start The Therapy!</button>
        </form>
        </>
    )
}
