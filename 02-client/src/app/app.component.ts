import { Component, OnInit } from '@angular/core';

import { WebsocketService } from '@services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  constructor(private wsService: WebsocketService) {}
}
