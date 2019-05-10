import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  inputText: string;
  sendText: string;
  userName: string;
  info: Object;

  constructor() { }

  ngOnInit() {
    //probably some message box asking you to login
  this.info = 
   [
      {"userName":"Nobody", "message":": " + "..."}, 
      {"userName":"Literally No one", "message":": " + "..."},
      {"userName":"David Benioff", "message":": "+"Danny forgot about the Iron Fleet but the Iron Fleet didn't forget about her"}
    ]
    }   
  

  onEnter(){
    this.sendText = ': '+ this.inputText;
    this.userName='Blaine';
  }

}