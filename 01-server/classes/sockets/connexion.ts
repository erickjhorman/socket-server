import socketIO from 'socket.io';
import http from 'http';

import * as socket from '../sockets/socket';

export default class SocketConexion {
  public io: socketIO.Server;

  constructor(server: http.Server) {
    this.io = socketIO(server);
    this.listenSocket();
  }

  private listenSocket() {
    console.log('Listening conexions ');

    /* Listen events in this case my socket will listen when a new user is connected*/

    this.io.on('connection', client => {
      console.log('Connected client');

      // Messages
      socket.message(client);

      /* See when a user disconnects  */
      socket.discconnect(client);
    });
  }
}
