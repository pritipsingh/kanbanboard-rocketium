import React from 'react'

const Header = ({cards, setCards}: any) => {


const handleChange = (value: string) => {
    const copy = [...cards]

    
    setCards(value);
}
  return (
    <div className='flex p-2 w-full justify-between mt-7 mb-[9vh]'>
        <div className='flex flex-col'>
            <h1 className='text-[2.2rem] text-green-800'>TASK BOARD</h1>
            <p className='text-[0.6rem] leading-0 text-gray-500 font-light'>All tasks are grouped into categories, use the search bar to filter tasks based on teams, tags or title</p>
            
        </div>
        <div>
            

<input 
onChange={(e) => handleChange(e.target.value)}
    type="text" 
    id="helper-text" 
    aria-describedby="search-bar" 
    className="bg-gray-50  w-[20vw] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block p-2" placeholder="Search" />


    </div>
    </div>
  )
}

export default Header