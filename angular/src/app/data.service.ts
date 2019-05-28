import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // write_message(messageText) {
  //   const options = {params: new HttpParams().set('message', messageText)};
  //   return this.http.post('/messages?', options)
  // }
  write_message(messageText) {
    return this.http.post('/messages', messageText)
  }

  message_list() {
    return this.http.get('/messages');
  }

  user_list() {

    return this.http.get('/users');
  }
}
