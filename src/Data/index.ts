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
        team: "Marketing",
    title: "Inbox Design",
    id: "1",
    status: "todo",
    assignes: ['/'],
    tags: ["Design", "data"]
    },
    {
        team: "chronos",
    title: "Inbox Design2",
    id: "2",
    status: "started",
    assignes: ['/'],
    tags: ["Design", "data"]
    },
    {
        team: "Peekachu",
    title: "Inbox Design 3",
    id: "3",
    status: "started",
    assignes: ['/'],
    tags: ["Design", "data"]
    },
    {
        team: "Avenger",
    title: "Inbox Design 4",
    id: "4",
    status: "review",
    assignes: ['/'],
    tags: ["Design", "data"]
    },
    {
        team: "Pokemon",
    title: "Inbox Design 5",
    id: "5",
    status: "started",
    assignes: ['/'],
    tags: ["Design", "data"]
    },
    {
        team: "Man",
    title: "Inbox Design",
    id: "6",
    status: "started",
    assignes: ['/'],
    tags: ["Design", "data"]
    },
    {
        team: "Tweet",
    title: "Inbox Design 6",
    id: "7",
    status: "done",
    assignes: ['/'],
    tags: ["Design", "data"]
    },{
    team: "Tweet",
    title: "Inbox Design 6",
    id: "8",
    status: "done",
    assignes: ['/'],
    tags: ["Design", "data"]
    },

]