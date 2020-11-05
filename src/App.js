import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addValue, minusValue } from './counterSlice';
import List from './List';

function App() {

 const [theme, setTheme] = useState(false)
 const count =  useSelector(store => store.counter)

 const [welcomeText, setWelcomeText] = useState("Lorium")
 const [loading , setLoading] = useState(false)

 useLayoutEffect(() => {
!loading &&  setWelcomeText(welcomeMessage())

 }, [loading])

 const chalKar = useDispatch();
 const impRef = useRef() 

 const count2  = useMemo(() => {
  return countNumber(count)
 }, [count]) 

 const getNumber = useCallback(() =>{
   return [count, count + 1, count + 2];
 }, [count])


//  const getNumber = () =>{
//   return [count, count + 1, count + 2];
// }



 const style = useMemo(() => {
   return {
   background:theme ? 'black' : 'white',
   color:theme ? 'white' : 'black'
 }},[theme])

//  const style = {
//   background:theme ? 'black' : 'white',
//   color:theme ? 'white' : 'black'
// }

 useEffect(() =>{
console.log('style change')
 }, [style])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       <button onClick={() => impRef.current.settozero()}>Set to zero from Parent</button>

        <p>
          {welcomeText}
        </p>
        <button onClick={() => chalKar(minusValue())}>Minus</button>
       <input value={count2} style={style} onChange={() => {}}/> 
       <button onClick={() => chalKar(addValue())}>Plus</button>

       <button onClick={() => setTheme(theme =>  !theme)}>Toggle theme</button>
       <List getNumer={getNumber} ref={impRef}></List>

      </header>

      
    </div>
  );
}


function countNumber(number){
  for(let i=0;i < 1000000000; i++){}

  console.log("in Loop")
  return number;
}

function welcomeMessage(number){
  for(let i=0;i < 1000000000; i++){}


  return "Welcome to Hooks Channel";
}


export default App;
