import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
  
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  messageText: string;
  username: string;
  messageList: Object;
  userList: Object;
  newMessage: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    //probably some message box asking you to login
    this.data.message_list(this.messageText).subscribe(data => {
      this.messageList = data;
    }); 

    this.data.user_list().subscribe(data => {
      this.userList = data;
    });
  }
  
  onEnter(){
    console.log(this.messageText)
}
}