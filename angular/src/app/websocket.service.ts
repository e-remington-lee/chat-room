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

  // socketStart() {
  //   this.socket.on('message', (res) => {
  //     return res;
  //   });
  // }

  send_message(message) {
    this.socket.emit('message', message);
    console.log(message);
  }

  socket_messages = () => {
    return Observable.create((observer)=> {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }
}
