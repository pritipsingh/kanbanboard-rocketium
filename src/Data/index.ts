import { CardType, statusTypes } from "../Types/cardType";

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
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    tags: ["Design", "Blocker"]
    },
    {
        team: "chronos",
    title: "Inbox Infra",
    id: "2",
    status: "todo",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    tags: ["Backend"]
    },
    {
        team: "PHOenix",
    title: "Build Conversion Module",
    id: "3",
    status: "todo",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    tags: ["frontend", "data"]
    },
    {
        team: "LABS",
    title: "Set up co-piolet APIs",
    id: "4",
    status: "started",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    tags: ["Backend", "API"]
    },
    {
        team: "PHOENIX",
    title: "Setup redux structure",
    id: "5",
    status: "started",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    },
    {
        team: "Labs",
    title: "Build Co-piolet UI",
    id: "6",
    status: "started",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    tags: ["UI", "Frontend"]
    },
    {
        team: "pHEONIX",
    title: "eDitor design",
    id: "7",
    status: "started",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    tags: ["DESIGN", "Frontend"]
    },
    {
        team: "CHRONOS",
    title: "Notifications module",
    id: "8",
    status: "started",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    },
    {
        team: "PHOENIX",
    title: "SETUP CANVAS STATES",
    id: "9",
    status: "done",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    tags: ["FRONTEND"]
    },{
    team: "Tweet",
    title: "Inbox Design 6",
    id: "10",
    status: "done",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    tags: ["Design", "data"]
    },
    {
        team: "CHRONOS",
    title: "Project table API tests",
    id: "11",
    status: "review",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    tags: ["api", "backend","testing" ]
    },
    {
        team: "CHRONOS",
    title: "Project Table Fixes",
    id: "12",
    status: "review",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    },
    {
        team: "LUMOS",
    title: "Public view link",
    id: "13",
    status: "done",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    tags: ["api", "backend" ]
    },
    {
        team: "LABS",
    title: "command center UI testing",
    id: "14",
    status: "done",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    tags: ["ui", "frontend","testing" ]
    },
    {
        team: "CHRONOS",
    title: "Noifications Phase 1",
    id: "15",
    status: "done",
    assignes: ['../Faces/img.jpeg', '../Faces/img.jpeg', '../Faces/img.jpeg'],
    },

]