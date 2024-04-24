import Theme from "./components/Theme.js";
import { themes as initialThemes } from "./db.js";
import "./App.css";
import ThemeForm from "./components/ThemeForm.js";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {

  const [themes, setThemes] = useState(initialThemes);

  function handleAddTheme(newTheme) {
    setThemes([{ ...newTheme, id: uuid() }, ...themes]);
  }



  return (
    <>
 <header> <h1>Theme Creator </h1></header>
 <main>
 <ThemeForm onSubmit={handleAddTheme}/>
  
    {themes.map((theme)=> {
      return (
        
        <Theme key={theme.id} theme={theme} name={theme.name}/>
        
        
      )
    })}

  
  
 </main>
 </> );
}

export default App;

