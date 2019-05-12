import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  inputText: string;
  sendText: string;
  username: string;
  info: Object;

  constructor() { }

  ngOnInit() {
    //probably some message box asking you to login
  this.info = 
    [
      {"id": 1,
        "username":"Nobody",
       "message":": " + "..."}, 
      {"id": 2,
        "username":"Literally No one",
       "message":": " + "..."},
      {"id": 3,
        "username":"David Benioff",
       "message":": "+"Danny forgot about the Iron Fleet but the Iron Fleet didn't forget about her"}
    ]
    }   
  

  onEnter(){
    this.sendText = ': '+ this.inputText;
    this.username='Blaine';
  }

}