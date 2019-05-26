import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // writeMessage(message) {
  //   const info = { params: new HttpParams().set('q', message)}
  //   return this.http.get('/messages', info)
  // }

  message_list(messageText) {
    const options = {params: new HttpParams().set('message', messageText)}
    return this.http.get('/messages', options);
  }

  user_list() {
    return this.http.get('/users');
  }
}
