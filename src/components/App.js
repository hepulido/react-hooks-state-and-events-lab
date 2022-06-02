
import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isLight, setIsLight] = useState(true);

  function onClickHandler() {
    setIsLight((isLight) => !isLight);
  }
  const appClass = !isLight ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
       <button onClick={onClickHandler}>{(isLight) ? "Light" : "Dark"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
