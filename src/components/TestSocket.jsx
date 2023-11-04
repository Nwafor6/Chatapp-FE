import io from 'socket.io-client'; 
export const socket = io.connect('http://localhost:4000');
const userId= JSON.parse(localStorage.getItem("user"))
socket.emit("authenticate", userId.id);