"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// create an temp array to store info of socket
let allsocket = [];
// Here we will not directly push user o array. First user will specify they want to be a part of a specific array
// Then will push that user to in that array.
// {
//   {socket: socket, room: "room1"}
//   {socket: socket2, room: "room2"}
//   {socket: socket3, room: "room1"}
// }
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        //@ts-ignore
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type == "join") {
            console.log("user joined room " + parsedMessage.payload.roomId);
            allsocket.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }
        if (parsedMessage.type == "chat") {
            console.log("User wants to chat");
            // const currentUserRoom=allsocket.find((x)=>x.socket==socket)?.room
            let currentUserRoom = null;
            for (let i = 0; i < allsocket.length; i++) {
                if (allsocket[i].socket == socket) {
                    currentUserRoom = allsocket[i].room;
                }
            }
            for (let i = 0; i < allsocket.length; i++) {
                if (allsocket[i].room == currentUserRoom) {
                    allsocket[i].socket.send(parsedMessage.payload.message);
                }
            }
        }
    });
});
