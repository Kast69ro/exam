import  './mini-card.css'
export default function MiniCard({children}){
    let [foto,a]=children
    return (
     

        <div className='miniCard'>
            <img src={foto} alt="" />
            <h5>{a}</h5>
        </div>
    )
}