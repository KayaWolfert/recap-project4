import ColorCard from "./components/ColorCard.js";
import { themes } from "./db.js";
import "./App.css";

function App() {

  const theme = themes[0];
  return (
    <>
 <header> <h1>Theme Creator </h1></header>
 <main>
  <section> 
  <h2> {theme.name}</h2>
  <> {theme.colors.map ((color) => { 
    return (
    <div key={color.value}> 
    <ColorCard color={color} />
    </div> )
})}
  
  </>
  
  </section>
 </main>
 </> );
}

export default App;
