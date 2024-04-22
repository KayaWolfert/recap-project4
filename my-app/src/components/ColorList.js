import ColorCard from "./ColorCard.js";
import "./ColorList.css"

export default function ColorList({theme}){
    return (
        <>
        {theme.colors.map ((color) => { 
          return (
          <article className="list-article" key={color.value}> 
          <ColorCard color={color} />
          </article> )
          
      })}
       
        
        </>
    )
}