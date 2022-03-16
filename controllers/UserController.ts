import {Request, Response} from "express";
import {User, saveUser, getAllUsers} from "../models/UserModel"

const userTemplate = (user: User) => `<li>${user.name}, ${user.age}</li>`

export const addUser = async (req: Request, res: Response) => {
    const name = req.params.name;
    const age = req.params.age;

    const user: User = {name: name, age: +age};
    const result = await saveUser(user);
    res.send("Success");
}

export const getUsers = async(req: Request, res: Response) => {
    const users:User[] = await getAllUsers();
    let htmlString = "<ol>";
    users.forEach(user => {
        htmlString += userTemplate(user)
    });
    htmlString += "</ol>";
    res.send(htmlString);
}