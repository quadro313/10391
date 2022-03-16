var express = require("express");
import {addUser, getUsers} from "./controllers/UserController"

// MVC
// Model <--- стои код, който репрезентира модела на информацията и начините за нейна манипулация (четене, запис)
// View <---- стои код, който показва как се визуализира информацията от моделите
// Controller <--- код, който се грижи да получи информация от потребител и да я препрати? към модел
// Design Pattern

var app = express();

app.get("/", (req, res) => {
    res.send("hi");
})

app.get("/users/add/:name/:age" , addUser)
app.get("/users/get", getUsers);

app.listen(80, () => {
    console.log("server is on");
})