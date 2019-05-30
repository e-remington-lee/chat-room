import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  
  private url = 'http://localhost:8000';
  private socket;
  
  constructor() {
    this.socket = io(this.url);
   }

  // createObservableSocket() {
  //   const socket = 'ws://localhost:8000';
  //   this.ws = new WebSocket(socket);

  //   return new Observable(
  //     observer => { this.ws.new_message = (event) => observer.next(event.data)}
  //   )
  // }

  socketStart(message) {
    this.socket.emit('new message', message);
  }
}
