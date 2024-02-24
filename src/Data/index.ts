import { CardType, statusTypes } from "../Types/cardType";
import img from '../Faces/img.jpeg';
import img1 from '../Faces/face1.svg'
import img2 from '../Faces/face2.svg'
export const columnsDetails: statusTypes[] = [
    "todo" , "started" , "review" , "done" 
]

export const statuses : {
    title: String,
    status: statusTypes
}[] = [
    {
        title:"NOT STARTED",
        status:"todo"
    },
    {
        title:"IN PROGRESS",
        status:"started"
    },
    {
        title:"UNDER REVIEW",
        status:"review"
    },
    {
        title:"SHIPPED",
        status:"done"
    }
]

export const cardDetails: CardType[] = [
    {
        team: "CHROSNOS",
    title: "Inbox Design",
    id: "1",
    status: "todo",
    assignes: [img1, img, img2],
    tags: ["Design", "Blocker"]
    },
    {
        team: "chronos",
    title: "Inbox Infra",
    id: "2",
    status: "todo",
    assignes: [img2, ],
    tags: ["Backend"]
    },
    {
        team: "PHOenix",
    title: "Build Conversion Module",
    id: "3",
    status: "todo",
    assignes: [img2, img1],
    tags: ["frontend", "data"]
    },
    {
        team: "LABS",
    title: "Set up co-piolet APIs",
    id: "4",
    status: "started",
    assignes: [img2, img1],
    tags: ["Backend", "API"]
    },
    {
        team: "PHOENIX",
    title: "Setup redux structure",
    id: "5",
    status: "started",
    assignes: [img, img1],
    },
    {
        team: "Labs",
    title: "Build Co-piolet UI",
    id: "6",
    status: "started",
    assignes: [img],
    tags: ["UI", "Frontend"]
    },
    {
        team: "pHEONIX",
    title: "eDitor design",
    id: "7",
    status: "started",
    assignes: [img, img1 , img],
    tags: ["DESIGN", "Frontend"]
    },
    {
        team: "CHRONOS",
    title: "Notifications module",
    id: "8",
    status: "started",
    assignes: [img1],
    },
    {
        team: "PHOENIX",
    title: "SETUP CANVAS STATES",
    id: "9",
    status: "done",
    assignes: [img2, img1, img],
    tags: ["FRONTEND"]
    },{
    team: "Tweet",
    title: "Inbox Design 6",
    id: "10",
    status: "done",
    assignes: [img1, img],
    tags: ["Design", "data"]
    },
    {
        team: "CHRONOS",
    title: "Project table API tests",
    id: "11",
    status: "review",
    assignes: [img2, img],
    tags: ["api", "backend","testing" ]
    },
    {
        team: "CHRONOS",
    title: "Project Table Fixes",
    id: "12",
    status: "review",
    assignes: [img1, img2, img],
    },
    {
        team: "LUMOS",
    title: "Public view link",
    id: "13",
    status: "done",
    assignes: [img1, img2],
    tags: ["api", "backend" ]
    },
    {
        team: "LABS",
    title: "command center UI testing",
    id: "14",
    status: "done",
    assignes: [img2, img1, img],
    tags: ["ui", "frontend","testing" ]
    },
    {
        team: "CHRONOS",
    title: "Noifications Phase 1",
    id: "15",
    status: "done",
    assignes: [img2],
    },

]