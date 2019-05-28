import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
  
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit, AfterViewInit {

  messageText: string;
  username: string;
  messageList: Object;
  userList: Object;
  newMessage: Object;
  container: HTMLElement;

  constructor(private data: DataService) { }

  ngOnInit() {
    //probably some message box asking you to login
    this.data.message_list().subscribe(data => {
      this.messageList = data;
    }); 

    this.data.user_list().subscribe(data => {
      this.userList = data;
    });
  }

  ngAfterViewInit() {         
    this.container = document.getElementById("textBox");           
    this.container.scrollTop = this.container.scrollHeight;     
  }  
  
  onEnter(){
    const message = {
        user: {
        user_id:4
      },
      message: this.messageText
    }

    this.data.write_message(message).subscribe(data => {
      console.log('post request success!');
    }); 
    console.log(this.messageText)
}
  updateChat() {
    this.data.message_list().subscribe(data => {
      this.messageList = data;
    }); 

    this.data.user_list().subscribe(data => {
      this.userList = data;
    });

    setTimeout(this.updateChat, 500);
  }
}