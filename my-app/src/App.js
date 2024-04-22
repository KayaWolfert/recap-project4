import ThemeCard from "./components/ThemeCard.js";
import { themes } from "./db.js";
import "./App.css";

function App() {


  return (
    <>
 <header> <h1>Theme Creator </h1></header>
 <main>
  
    {themes.map((theme) => {
      return (
        <ThemeCard key={theme.name} theme={theme}/>

        
      )
    })}

  
  
 </main>
 </> );
}

export default App;

