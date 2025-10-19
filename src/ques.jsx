export default function Alz (){
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
            <label className="label">Hobbies:</label>
            <input className="hobbies" type="text" placeholder="Hobbies .ie Gardening,Swimming" required></input>
            <label className="label">Past Activities:</label>
            <input className="past-act" type="text" placeholder="Past Activities " required></input>
            <label className="label">Favorite Places:</label>
            <input className="places" type="text" placeholder="Favorite Places" required></input>
            <label className="label">Colors You Find Soothing:</label>
            <input className="color" type="text" placeholder=".ie red,green,blue OR any way you describe it" required></input>
            <button className="smb">Start The Therapy!</button>
        </form>
        </>
    )
}
