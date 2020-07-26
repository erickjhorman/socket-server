import { Injectable } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(public wsService: WebsocketService) {}

  sendMessages(mensaje: string) {
    const payload = {
      de: 'Erick',
      cuerpo: mensaje,
    };

    this.wsService.emitMessage('mensaje', payload);
  }

  getMessages() {
    return this.wsService.listen('mensaje-nuevo');
  }
}
