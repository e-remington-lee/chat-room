import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:8000';
  private socket: SocketIOClient.Socket;

  constructor(private http: HttpClient) { 
    this.socket = io(this.url);
  }

  write_message(message) {
    return this.http.post('/messages', message);
  }

  send_message(message) {
    this.socket.emit('message', message);
    console.log(message);
  }
  
  message_list() {
    return this.http.get('/messages');
  };

  user_list() {
    return this.http.get('/users');
  };

  socket_messages = () => {
    return Observable.create((observer)=> {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }


}
