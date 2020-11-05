import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";

 const List = forwardRef(({getNumer}, ref) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
console.log('Effect Executed')
    setItems(getNumer())
  },[getNumer] )

  const settozero = () =>{
      setItems([0,0,0])
  }

  useImperativeHandle(ref, () =>({
settozero
  }))
  return <div>
      {items.map(item => {
      return <p style={{color:'white'}}>{item}</p>
  })
  }
  <button onClick={settozero}>Set to zero</button>
  </div>;
});


export default List;
