import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import img1 from './Faces/face1.svg'
import Column from './Components/Column';
import { cardDetails, statuses } from './Data';
import Board from './Components/Board';

function App() {
  const [cards, setCards] = useState([...cardDetails])
  return (
    <div className=" bg-green-50 flex  justify-center h-[100vh] w-[100vw]
    ">
      
  <Board />
   
    </div>
  );
}

export default App;
