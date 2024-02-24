/**
 * `Board` component serves as the main container for the task management or kanban board.
 * It initializes the cards state from local storage or fallbacks to default data provided by `cardDetails`.
 * This component also manages search functionality across cards and persists card changes to local storage.
 * 
 * @component
 * @example
 * return (
 *   <Board />
 * )
 */

import React, { useEffect, useState } from "react";
import Column from "./Column";
import { cardDetails, statuses } from "../Data";
import Header from "./Header";

const Board = () => {
  /**
   * Retrieves the initial cards from local storage or uses default data.
   * 
   * @function getInitialCards
   * @returns {Array} An array of card objects.
   */
  const getInitialCards = () => {
    const savedCards = localStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : [...cardDetails];
  };
 // State to manage the cards displayed on the board.
  const [cards, setCards] = useState(getInitialCards);

   // State to manage the search results of cards.
  const [searchCards, setSearchCards] = useState([...cards]);

    /**
   * useEffect hook to persist cards to local storage on any change to the `cards` state.
   * It also updates the `searchCards` state to reflect the latest `cards` state.
   */

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
    setSearchCards([...cards]);
  }, [cards]);
  return (
    <div className="flex flex-col h-full max-w-full  mx-[25vw] overflow-x-scroll">
      <Header
        searchCards={searchCards}
        setSearchCards={setSearchCards}
        cards={cards}
      />

      <div className="flex h-full w-full">
        {statuses.map((status, index) => (
          <Column
            searchCards={searchCards}
            key={index}
            title={status.title}
            column={status.status}
            cards={cards}
            setcards={setCards}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
