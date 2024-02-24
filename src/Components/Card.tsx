import { motion } from "framer-motion";
import { getColourForTags } from "../utils/Types/helper/helper";
import img from '../Faces/img.jpeg'
/**
 * Represents a single card component in the task board.
 * Each card displays information about a task, including team, title, tags, and assignees.
 * It supports drag-and-drop functionality via Framer Motion for interactive rearrangement.
 *
 * @component
 * @param {Object} props - The props object for the Card component.
 * @param {string} props.id - The unique identifier for the card.
 * @param {string} props.status - The current status column of the card.
 * @param {string} props.color - The color identifier for the card, used for the team label.
 * @param {string} props.team - The team name associated with the card.
 * @param {string} props.title - The title of the card/task.
 * @param {Array<string>} props.assignes - An array of URLs for the assignee avatars.
 * @param {Array<string>} [props.tags] - An optional array of tags associated with the card.
 * @param {Function} props.handleDragStart - The function to call when the drag starts, passing the event and card props.
 */

const Card = (props: any) => {
  const getCoordinatedColor = getColourForTags();

  const dragVariants = {
    drag: { scale: 1.1 },
  };

  console.log("numm" , JSON.parse(props.id) , typeof JSON.parse(props.id))

  console.log(props.assignes);
  console.log(getCoordinatedColor(props.team));
  return (
    <>
      <div
        data-before={props.id || "-1"}
        data-col={props.status}
        className="my-0.5 z-1 h-3 min-w-fullß z-1 opacity-0"
      ></div>
      <motion.div
        layout
        layoutId={props.id}
        draggable="true"
        onDragStart={(e) => props.handleDragStart(e, { props })}
        initial={{
          y: (JSON.parse(props.id) + 1) * 5,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "just",
        }}
        whileTap={{
          rotate: -6,
          scale: 0.8,
        }}
        whileFocus={{
          rotate: -12,
          scale:  0.8,

        }}
        whileHover={{
          rotate: -6,
          scale:  0.9,
        }}
        whileDrag={{
          y: 0,
        }}
        variants={dragVariants}
        className={`min-w-full hover:cursor-move z-[99] active:cursor-grabbing focus:cursor-grabbing p-2 bg-white rounded-md shadow-sm flex flex-col justify-start items-start `}
      >
        <div
          className={`px-[1px] ${props.color}  font-normal text-[0.4rem] rounded-sm`}
        >
          {props.team.toUpperCase()}
        </div>
        <div className="text-[0.6rem] mt-1 text-gray-500">{props.title}</div>
        <div className="flex w-full mt-3 justify-between items-center">
          <div className="text-[0.5rem] text-gray-400">TICKET #{props.id}</div>
          <div className="flex gap-1 items-center justify-center">
            {props.assignes.map((profile: string | undefined, index: any) => (
              <img
              key={index}
              className="w-[14px] h-[14px] rounded-full text-[0.5rem]"
                src={profile}
                alt={"assigne"}
              />
            ))}
          </div>
        </div>
        {props.tags && (
          <div className="flex gap-1 mt-2  items-center justify-center">
            {props.tags.map((tag: string, index: any) => (
              <div className="px-[1px] text-white bg-gray-300 font-normal text-[0.4rem] rounded-sm">
                {tag.toUpperCase()}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Card;
