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
      {"firstName":"John", "lastName":"Doe"}, 
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
    }   
  

  onEnter(){
    this.sendText = ': '+ this.inputText;
    this.userName='Blaine';
  }

}