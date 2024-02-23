import React, { useState } from 'react'
import Card from './Card'
import { cardDetails, columnsDetails, statuses } from '../Data'
import { stat } from 'fs'
import { CardType } from '../Types/cardType'
const Column = ({ title, column, cards, setcards }: any) => {
    const [activeColumn, setActiveColumn] = useState<String | null>("todo");

    let filteredCards = cards.filter((card: { status: any }) => card.status === column)



    function handleDragOver(e: any, columnId: string) {
        e.preventDefault();

        const indicators = getIndicator();

        clearHighlights(indicators);

        const el = getNearestIndicator(e, indicators);

        if (el && el.element) {
            el.element.style.paddingTop = "65px";
        }


        setActiveColumn(columnId);
    }

    const clearHighlights = (els: any) => {
        const indicators = els || getIndicator();

        indicators.forEach((i: any) => {
            i.style.paddingTop = "0";
        });
    };


    function handleDragLeave(e: any) {
        const indicators = getIndicator();
        clearHighlights(indicators);
        setActiveColumn(null);

    }

    function handleDrop(e: any) {
        e.preventDefault();
        const cardId = e.dataTransfer.getData("CardId");
        setActiveColumn(null);

        const indicators = getIndicator();
        clearHighlights(indicators);
        const { element } = getNearestIndicator(e, indicators)

        const before = element ? (element.dataset.before) : "-1";

        console.log("nearest card", before)

        if (cardId !== before) {
            let copy = [...cards]

            let cardToMove = copy.find((eachCard) => eachCard.id === cardId);


            if (!cardToMove) return;

            cardToMove = { ...cardToMove, status: column };
            console.log(cardToMove)
            copy = copy.filter((eachCard) => eachCard.id !== cardId)


            const moveToBack = before === '-1';

            if (moveToBack) {
                console.log("I am moving to back")
                copy.push(cardToMove)
            } else {
                const insertAtIndex = copy.findIndex((el) => el.id === before);
                console.log("the index to insert at", insertAtIndex)


                if (insertAtIndex === undefined) return;


                copy.splice(insertAtIndex, 0, cardToMove);


            }


            setcards(copy);

        }
    }

    function handleDragStart(e: any, card: any) {
        console.log("the card id", card.props.id, card)
        e.dataTransfer.setData("CardId", card.props.id)
       


    }

    const getNearestIndicator = (e: any, indicators: any[]) => {
        const DISTANCE_OFFSET = 50;
        if (indicators.length === 0) {
                
            return "-1";
        }
        console.log("indicator", indicators)
        const el = indicators.reduce((closest, child) => {
          
            console.log("closest", closest, child)
            let box = child.getBoundingClientRect();
            let offset = e.clientY - (box.top + box.height / 2);

            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child }
            } else {
                return closest;
            }
        }, {
            offset: Number.NEGATIVE_INFINITY,
            element: indicators[indicators.length - 1]
        })

        return el;
    }


    function getIndicator() {

        return Array.from(document.querySelectorAll(`[data-col="${column}"]`))
    }

    return (


        <div className='w-full mx-auto'>



            <div className='flex shrink-0 flex-col w-full gap-1 h-full items-start'>
                <h1 className='font-semibold shrink-0 p-2 text text-gray-500 text-[0.9rem]'>{title}</h1>
                <div
                    onDragOver={(e) => handleDragOver(e, title as any)}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`drop-placeholder transition-all h-full mx-auto w-full gap-0 p-2  ${activeColumn === title ? "bg-gray-200" : ""}`}
                >

                    {filteredCards.map((eachStatus: { id: any }, index: any) => (
                        <Card key={eachStatus.id} {...eachStatus} handleDragStart={handleDragStart} />
                    ))}




<div data-before={null} data-col={column} className='my-0.5 h-0.5 w-full bg-violet-400 opacity-0'></div>




                </div>

            </div>
        </div>


    )
}

export default Column