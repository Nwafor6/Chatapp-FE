import io from 'socket.io-client'; 
// export const socket = io.connect('http://localhost:4000');
export const socket = io.connect("https://chatz-socket.onrender.com")
export const BASE_URL="http://localhost:8000"
