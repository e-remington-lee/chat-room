import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  url = window.location.href
  socket: SocketIOClient.Socket;
  
  constructor() {
    this.socket = io.connect(this.url, {transports: ['websocket']});
   }

   sendSocketMessage(message) {

    this.socket.emit('message', message);
  }
  
  sendSocketUser(username) {
    this.socket.emit('users', username);
  }

  receiveSocketMessages = () => {
    return Observable.create((observer)=> {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }

  receiveSocketUsers =() => {
    return Observable.create((observer)=> {
      this.socket.on('users', (username)=> {
        observer.next(username);
      });
    });
  }
}
