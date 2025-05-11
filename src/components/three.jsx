import  './three.css'
export default function Three({children}){
    let [a,b,c,] = children;
    return (
        
    <div className="big">
        <img src={a} alt="" />
        <div style={{padding:'20px'}}>
            <h3>{b}</h3>
        <p>{c}</p>
        </div>
        <div className='price'>
            <h4><span>$250</span>/NIGHT</h4>
            <button>Details</button>


        </div>
    </div>
    )
}