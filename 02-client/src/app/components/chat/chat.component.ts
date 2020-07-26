import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  texto = '';
  mensajeSubscription: Subscription;
  elemento: HTMLElement;

  mensajes: any[] = [];

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.elemento = document.getElementById('chat-mensajes');

    this.mensajeSubscription = this.chatService
      .getMessages()
      .subscribe((msg) => {
        this.mensajes.push(msg);
        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 50);
      });
  }

  enviar() {
    if (this.texto.trim.length === 0) {
      return;
    }
    this.chatService.sendMessages(this.texto);
    console.log(this.texto);
    this.texto = '';
  }

  ngOnDestroy(): void {
    this.mensajeSubscription.unsubscribe();
  }
}
