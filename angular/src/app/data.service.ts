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

  check_user_database(user_id) {
    const params = { params: new HttpParams().set('user_id', user_id) };
    return this.http.get('/users', params);
  }

  new_user(user) {
    return this.http.post('/users', user);
  }

  user_list() {
    return this.http.get('/users');
  }
}
