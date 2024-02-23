import React, { useEffect, useState } from 'react'
import Column from './Column'
import { statusTypes } from '../Types/cardType'
import { cardDetails, statuses } from '../Data'
import Header from './Header'



const Board = () => {
    const [cards, setCards] = useState([...cardDetails])
  return (
    <div className='flex flex-col h-full w-full  mx-[25vw]'>
      <Header cards={cards} setCards={setCards}/>

    <div className='flex h-full w-full overflow-scroll'>
    
   
   {
      statuses.map((status, map) => <Column title={status.title} column={status.status} cards={cards} setcards={setCards}/>
      )
    }

    </div>
    </div>
  )
}

export default Board