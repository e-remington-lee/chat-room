import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  
  constructor() { }

  socketStart() {
    const socket = io('http://localhost:8000')

    socket.on('data', (res)=> {
      console.log(`new connection to: ${res.id})`);
    });
  }
}
