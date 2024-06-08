
import { useState } from 'react'
import './App.css'

import Watch from './components/Watch/Watch'
import { useEffect } from 'react';
function App() {

  const [watches, setWatches]=useState([]);
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/dipu-37/watches-data/main/watches.json')
    .then(res=> res.json())
    .then(data =>setWatches(data))
  },[])

  // const watches =[
  //   {id: 1, name:'applo', price: 200},
  //   {id: 2, name:'samsung', price: 200},
  //   {id: 3, name:'MI', price: 200},
    
    
  // ]
  // const watches = [
  //     {
  //       "id": 1,
  //       "name": "TechGear X1000",
  //       "price": 299.99
  //     },
  //     {
  //       "id": 2,
  //       "name": "SmartWare A500",
  //       "price": 199.99
  //     },
  //     {
  //       "id": 3,
  //       "name": "EliteTech Pro300",
  //       "price": 399.99
  //     }
  //   ]
  
  
  return (
    <>
      
      <h1>Vite + React</h1>
      
      {
        watches.map(watch => <Watch watch={watch} key={watches.id} ></Watch>)
      }
     
    </>
  )
}

export default App
