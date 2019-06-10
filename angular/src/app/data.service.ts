import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  writeMessage(message) {
    return this.http.post('/messages', message);
  }

  getMessageList() {
    return this.http.get('/messages');
  }

  checkUserDatabase(username) {
    const params = new HttpParams().set('username', username)
    return this.http.get('/users', {observe: 'response', params});
  }

  createUser(user) {
    return this.http.post('/users', user);
  }

  getUserList() {
    return this.http.get('/users');
  }
}
