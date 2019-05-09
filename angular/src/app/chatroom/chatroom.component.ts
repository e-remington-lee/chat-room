import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  inputText: string;
  constructor() { }

  ngOnInit() {
  }

  onEnter(){
    console.log(this.inputText);
  }

}
