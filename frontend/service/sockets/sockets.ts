import io from 'socket.io-client';

// const HOST = 'http://localhost:4000';
const HOST = 'https://api.interactiplay.com.br';

const socket = io(HOST + '/public', {
  transports: ['websocket'],
});

export default socket;
