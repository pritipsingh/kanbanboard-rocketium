export type statusTypes = "todo" | "started" | "review" | "done" ;

export type CardType = {
    team: string,
    title: string,
    status: statusTypes ,
    id: string,
    assignes: string[]
    tags?: string[]
}