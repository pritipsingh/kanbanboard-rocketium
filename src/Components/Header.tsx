import React from "react";

/**
 * `Header` component displays the task board's header section including a search input.
 * It allows filtering of tasks based on a search term that matches task titles, teams, or tags.
 * 
 * @component
 * @param {Object} props
 * @param {Array} props.searchCards - The current state of cards filtered by the search input.
 * @param {Function} props.setSearchCards - Function to update the state of `searchCards`.
 * @param {Array} props.cards - The initial full list of card objects to be searched.
 */

const Header = ({ searchCards, setSearchCards, cards }: any) => {

 /**
   * Handles changes in the search input field and filters the tasks based on the input value.
   * If the input is empty, it resets the searchCards to the original full list of cards.
   * Otherwise, it filters cards by matching the input value with card's title, team, or tags.
   * 
   * @param {string} value - The search input value.
   */
  const handleChange = (value: string) => {
    if (value.length <= 0 || !value){
      return setSearchCards(cards);
    }
      console.log(cards);
  const filteredCards = cards.filter((card: any) => ( card.title.toLowerCase().includes(value.toLowerCase())) ||  card.team.toLowerCase().includes(value.toLowerCase()) || card.tags && card.tags.some((tag: string) => 
  tag.toLowerCase().includes(value)))
  
      setSearchCards(filteredCards);
  };
  return (
    <div className="flex p-2 w-full justify-between mt-7 mb-[9vh]">
      <div className="flex flex-col">
        <h1 className="text-[2.2rem] text-green-800">TASK BOARD</h1>
        <p className="text-[0.6rem] leading-0 text-gray-500 font-light">
          All tasks are grouped into categories, use the search bar to filter
          tasks based on teams, tags or title
        </p>
      </div>
      <div>
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          id="helper-text"
          aria-describedby="search-bar"
          className="bg-gray-50  w-[20vw] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block p-2"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Header;
