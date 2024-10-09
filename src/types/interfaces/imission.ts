import missionStatus from "../enums/todo-status";

export default interface IMission {
    title: string;
    body: string;
    status: missionStatus;
    createdAt: Date;
}