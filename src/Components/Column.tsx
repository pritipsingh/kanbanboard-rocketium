import React, { useState } from "react";
import Card from "./Card";
import { CardType } from "../utils/Types/cardType";
import { motion } from "framer-motion"
import { getColourForTags } from "../helper/helper";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
/**
 * Represents a column in the kanban board. Each column corresponds to a task status (e.g., "Todo", "In Progress", "Done").
 * It handles the display of cards within its status category, and supports drag-and-drop functionality for moving cards between columns.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - The title of the column.
 * @param {string} props.column - The status identifier that this column represents.
 * @param {Array<CardType>} props.cards - The array of all card objects.
 * @param {Function} props.setcards - The function to update the state of `cards` when a card is moved.
 * @param {Array<CardType>} props.searchCards - The array of card objects filtered by the search criteria.
 */
const Column = ({ title, column, cards, setcards, searchCards }: any) => {

  const { handleDragOver, handleDragLeave, handleDrop, handleDragStart, activeColumn} = useDragAndDrop(setcards, cards, column, title);

  let filteredCards = searchCards.filter(
    (card: { status: any }) => card.status === column
  );

  const getCoordinatedColor = getColourForTags();


 
  return (
    <div className="w-full mx-auto">
      <div className="flex shrink-0 flex-col min-w-full overflow-scroll gap-1 h-full items-start">
        <h1 className="font-semibold shrink-0 p-2 text text-gray-500 text-[0.9rem]">
          {title}
        </h1>
        <motion.div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`drop-placeholder transition-colors rounded-md h-full mx-auto min-w-full gap-0 p-2  ${
            activeColumn === title ? "bg-gray-200" : ""
          }`}
        >
          {filteredCards.map((eachStatus: CardType) => (
            <Card
              key={eachStatus.id}
              {...eachStatus}
              color={getCoordinatedColor(eachStatus.team)}
              handleDragStart={handleDragStart}
            />
          ))}

          <div
            data-before={-1}
            data-col={column}
            className="my-0.5 h-3 min-w-full z-1 opacity-0"
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Column;
