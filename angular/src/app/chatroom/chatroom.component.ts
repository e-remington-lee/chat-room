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
    this.userName='Blaine';
  }

  onEnter(){
    this.info = {
      "user":[
        {"a": this.userName, "b": this.inputText}
      ]
    }

    this.sendText = this.inputText;
  }

}
