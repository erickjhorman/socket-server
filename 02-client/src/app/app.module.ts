import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '@enviroments/environment';

/* Sockets */
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


const config: SocketIoConfig = {
  url: environment.wsUrl, options: {}
};

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
