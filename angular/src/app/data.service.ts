import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


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

  check_user_database(username) {
    const params = new HttpParams().set('username', username)
    return this.http.get('/users', {observe: 'response', params});
  }

  create_user(user) {
    return this.http.post('/users', user);
  }

  user_list() {
    return this.http.get('/users');
  }
}
