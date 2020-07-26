import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Server connected');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Server disconnected');
      this.socketStatus = false;
    });
  }

  /* emit an event */
  emitMessage(event: string, payload?: any, callback?: () => void) {
    console.log('Emitting', event);

    this.socket.emit(event, payload, callback);
  }

  /* listen events */

  listen(evento: string) {
    return this.socket.fromEvent(evento);
  }
}
