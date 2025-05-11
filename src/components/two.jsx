import  './two.css'
export default function Contact({children}){
    let [foto,a,b]=children
    return (
        <div className='mainCal'>
            <img src={foto} alt="" />
            <div className='call'>
                <p>{a}</p>
                <h4>{b}</h4>

            </div>
        </div>
    )
}