import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  writeMessage(message) {
    const info = { params: new HttpParams().set('q', message)}
    return this.http.get('/messages', info)
  }
}
