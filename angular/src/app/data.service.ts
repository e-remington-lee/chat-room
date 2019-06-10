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
}
