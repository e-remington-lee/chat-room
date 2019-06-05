import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  
  private url = 'http://localhost:8000';
  private socket: SocketIOClient.Socket;
  
  constructor() {
    this.socket = io(this.url);
   }

  send_message(message) {
    this.socket.emit('message', message);
  }
  
  send_created_user(username) {
    this.socket.emit('users', username);
  }

  socket_messages = () => {
    return Observable.create((observer)=> {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }

  user_observable =() => {
    return Observable.create((observer)=> {
      this.socket.on('users', (username)=> {
        observer.next(username);
      });
    });
  }
}
