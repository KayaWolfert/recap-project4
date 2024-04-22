import ColorCard from "./ColorCard.js";

export default function ThemeCard({theme}){
    return (
        <section>
        <h2> {theme.name}</h2>
        {theme.colors.map ((color) => { 
          return (
          <article key={color.value}> 
          <ColorCard color={color} />
          </article> )
          
      })}
       
        
        </section>
    )

}