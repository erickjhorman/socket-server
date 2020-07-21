import { Message } from './../../models/message';
/*  Method of my sockets */

import { Socket } from 'socket.io';

export const discconnect = (client: Socket) => {
  /* See when a user disconnects  */
  client.on('disconnect', () => {
    console.log('Client disconected');
  });
};

export const message = (client: Socket) => {
  client.on('mensaje', (payload: Message) => {
    console.log('Message receive', payload);
  });
};
