import  './contact.css'
export default function Contact({children}){
    let [foto,a]=children
    return (
        <div className='mainCal'>
            <img src={foto} alt="" />
            <div className='call'>
                <p style={{color:a}}>Call us now</p>
                <h4 style={{color:a}}>(414) 567 - 2109</h4>

            </div>
        </div>
    )
}