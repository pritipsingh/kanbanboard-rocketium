import { useState } from 'react';

export const useDragAndDrop = (setcards: any, cards: any, column: any, title: any ) => {
  const [activeColumn, setActiveColumn] = useState(null);

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
  }


   /**
   * Handles on dropping the drag.
   * @param {React.DragEvent} e - The drag event.
   */

  function handleDrop(e: any) {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("CardId");
    setActiveColumn(null);


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


  return { handleDragOver, handleDragLeave, handleDrop, handleDragStart, activeColumn};
};