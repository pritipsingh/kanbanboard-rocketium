import React, { useState } from "react";
import Card from "./Card";
import { CardType } from "../Types/cardType";
import { motion } from "framer-motion"
import { getColourForTags } from "../helper/helper";

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
  // Tracks if a column is currently the target of a drag-over event
  const [activeColumn, setActiveColumn] = useState<String | null>("todo");
   // Tracks if a card is being dragged
  const [cardDragged, setCardDragged] = useState<boolean>(false);

  // Filter cards for this column based on search results

  let filteredCards = searchCards.filter(
    (card: { status: any }) => card.status === column
  );

  const getCoordinatedColor = getColourForTags();


  /**
   * Handles drag over events on the column, updating the appearance to indicate a drop target.
   * @param {React.DragEvent} e - The drag event.
   */

  function handleDragOver(e: any) {
    e.preventDefault();

    const indicators = getIndicator();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    if (el && el.element) {
      el.element.style.paddingTop = "100px";
      el.element.style.opacity= "1"
    }

    setActiveColumn(title);
  }

   /**
   * Clears the nearest element to the dragged element
   * @function {clearHighlights} e - The drag event.
   */

  const clearHighlights = (els: any) => {
    const indicators = els || getIndicator();

    indicators.forEach((i: any) => {
      i.style.paddingTop = "0";
      i.style.opacity= "0"
    });
  };

  /**
   * Handles on leaving the drag.
   * @param {React.DragEvent} e - The drag event.
   */


  function handleDragLeave(e: any) {
    const indicators = getIndicator();
    clearHighlights(indicators);
    setActiveColumn(null);
    setCardDragged(false);
  }


   /**
   * Handles on dropping the drag.
   * @param {React.DragEvent} e - The drag event.
   */

  function handleDrop(e: any) {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("CardId");
    setActiveColumn(null);
    setCardDragged(false);

    const indicators = getIndicator();
    clearHighlights(indicators);
    const { element } = getNearestIndicator(e, indicators);

    const before = element ? element.dataset.before : "-1";

    console.log("nearest card", before);

    if (cardId !== before) {
      let copy = [...cards];

      let cardToMove = copy.find((eachCard) => eachCard.id === cardId);

      if (!cardToMove) return;

      cardToMove = { ...cardToMove, status: column };
      console.log(cardToMove);
      copy = copy.filter((eachCard) => eachCard.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        console.log("I am moving to back");
        copy.push(cardToMove);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        console.log("the index to insert at", insertAtIndex);

        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToMove);
      }

      setcards(copy);
    }
  }

   /**
   * Handles on starting the drag.
   * @param {React.DragEvent} e - The drag event.
   */


  function handleDragStart(e: any, card: any) {
    console.log("the card id", card.props.id, card);
    e.dataTransfer.setData("CardId", card.props.id);

    setCardDragged(true);
  }


   /**
   * Get which element is the closest to the dragged element
   * @function {getNearestIndicator} e 
   */
  const getNearestIndicator = (e: any, indicators: any[]) => {
    const DISTANCE_OFFSET = 50;
    if (indicators.length === 0) {
      return "-1";
    }
    console.log("indicator", indicators);
    const el = indicators.reduce(
      (closest, child) => {
        console.log("closest", closest, child);
        let box = child.getBoundingClientRect();
        let offset = e.clientY - (box.top + box.height / 2);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  function getIndicator() {
    return Array.from(document.querySelectorAll(`[data-col="${column}"]`));
  }

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
          className={`drop-placeholder transition-colors h-full mx-auto min-w-full gap-0 p-2  ${
            activeColumn === title ? "bg-gray-200" : ""
          }`}
        >
          {filteredCards.map((eachStatus: CardType) => (
            <Card
              key={eachStatus.id}
              {...eachStatus}
              color={getCoordinatedColor(eachStatus.team)}
              cardDragged={cardDragged}
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
