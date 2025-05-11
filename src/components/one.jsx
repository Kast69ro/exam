import  './one.css'
export default function One({children}){
    let [foto,h4,p] = children;
    return (
        <div className="card">
            <img src={foto} alt="" />
            <h4>{h4}</h4>
            <p>{p}</p>
        </div>
    )
}