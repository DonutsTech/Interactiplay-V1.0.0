import io from 'socket.io-client';

// const HOST = 'http://localhost:4000';
const HOST = 'https://ec2-35-173-188-226.compute-1.amazonaws.com';

const socket = io(HOST + '/public', {
  transports: ['websocket'],
});

export default socket;
