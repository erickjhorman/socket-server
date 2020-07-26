import { Message } from './../../models/message';
/*  Method of my sockets */

import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export const discconnect = (client: Socket) => {
  /* See when a user disconnects  */
  client.on('disconnect', () => {
    console.log('Client disconected');
  });
};

export const message = (client: Socket, io: socketIO.Server) => {
  client.on('mensaje', (payload: Message) => {
    console.log('Message receive', payload);

    // listen an event and emit it to the client
    io.emit('mensaje-nuevo', payload);
  });
};
