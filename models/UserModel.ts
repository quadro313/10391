import {promises} from "fs";

export type User = {
    name: string;
    age: number;
}

// прочитаме текущото състояние на файла
// добавяме новия потребител към текущо състояние
// запазваме новото състояние
export const saveUser = async (user: User) => {
    let fileContents = await promises.readFile(__dirname + "/users.txt", "utf-8");
    fileContents += user.name + "," + user.age + "\n";
    promises.writeFile(__dirname + "/users.txt", fileContents, "utf-8");
    return true;
}

export const getAllUsers = async () => {
    let fileContents = await promises.readFile(__dirname + "/users.txt", "utf-8");
    const users: User[] = [];
    fileContents.split("\n").forEach(el => {
        if(el.length == 0) {} else {
            const userInfo = el.split(",");
            const newUser: User = {name: userInfo[0], age: +userInfo[1]}
            users.push(newUser);
        }
    })
    return users;
}


