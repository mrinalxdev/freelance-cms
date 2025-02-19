export type TaskStatus = 'Done' | 'On going' | 'On list';
export type TaskCategory = 'Casual Work' | 'Web Design' | 'Backend' | 'System Design' | 'App Design'

export interface Task {
    id : number;
    title : string;
    status : TaskStatus
    category : TaskCategory
    date : string
    members : number
    hasLink : boolean
}
