import Theme from "./components/Theme.js";
import { themes } from "./db.js";
import "./App.css";

function App() {


  return (
    <>
 <header> <h1>Theme Creator </h1></header>
 <main>
  
    {themes.map((theme) => {
      return (
        <Theme key={theme.name} theme={theme} name={theme.name}/>

        
      )
    })}

  
  
 </main>
 </> );
}

export default App;

