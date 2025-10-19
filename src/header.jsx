import noti from './assets/noti.png';
export default function Header() { 
    return (
        <>
        <div className="header">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" className="logo"/>
            <h1>Serenify</h1>        
        </div>
        <div className="s-header">
            <div className="show">
                <h1>Helping Minds, Healing Lives</h1>
                <img src={noti} className="s-logo"/>
                <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" className="s-logo-2"/>
            </div>
            <h2>Kindly Choose</h2>
        </div>
        </>
    )
}
