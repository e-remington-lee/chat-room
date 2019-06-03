import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  write_message(message) {
    return this.http.post('/messages', message);
  }

  message_list() {
    return this.http.get('/messages');
  }

  user_list() {
    return this.http.get('/users');
  }
}
