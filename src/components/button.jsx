import  './button.css'
export default function Button({children}){
    let[txt,a,b,c,d] = children;
  return   <button style={{borderRadius:'10px',backgroundColor:a,color:b,padding:c,border:d}}>{txt}</button>


   
    
    

}