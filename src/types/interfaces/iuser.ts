import IMission from "./imission";

export default interface IUser {
    name: string;
    password: string;
    email: string;
    age: number;
    todos: IMission[];
}