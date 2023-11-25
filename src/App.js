import React, { useCallback, useState } from 'react';

import ItemList from "./ItemList";

import MegaBoost from './MegaBoost';

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const handleMegaBoost = useCallback(()=>{
    setCount((currentValue) => currentValue + 9999);
  },[]);
  

  return (
    <>
      Counter Value: {count}
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me!
      </button>
      <MegaBoost handleClick={handleMegaBoost} />

      <div>
        <ItemList items={items}/>
      </div>
    </>
   
  );
}

export default App;

