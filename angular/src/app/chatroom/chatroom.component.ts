import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { WebsocketService } from '../websocket.service';
  
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit, AfterViewInit {

  messageText: string;
  username: string;
  messageList: any[]=[];
  userList: any[]=[];
  container: HTMLElement;

  constructor(private data: DataService, private web: WebsocketService) { }

  ngAfterViewInit() {         
    this.container = document.getElementById("textBox");           
    this.container.scrollTop = this.container.scrollHeight;     
  }  
  
  onEnter(){
    var today = new Date();

    var message_time = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate()
     + ' ' + today.getHours() +':'+today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds()

    const message = {
        user: {
          username: 'Apple',
          user_id: 4
      },
      message: this.messageText,
      message_time: message_time
    }

    // this.data.write_message(message).subscribe(data => {
    //   console.log('post request success!');
    // });
    this.web.send_message(message);
    this.messageText ="";
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');

    this.web.socket_messages().subscribe(message => {
      this.messageList.push(message);
    })

    this.data.message_list().subscribe((data: any[]) => {
      this.messageList = data;
    })

    this.data.user_list().subscribe((data: any[]) => {
      this.userList = data;
    })

    if (localStorage.getItem('username') == null) {
      var response = window.prompt("Enter your username", "username");
      var username = response.toLocaleLowerCase();
      this.data.check_user_database(username).subscribe((data: Object) => {
        if (data['Found']) {
          console.log(data)
        }
      })
    } else {
      console.log('Not found, creating new user')
    }

        // if (check_database == null) {
        //   console.log('Did it!')
        // }
      // If statement to return if the username already exists, then prompt to make a new username
      // Else, if the local storage !== null, then it just loads properly and sets the username to the local storage value
    this.container = document.getElementById("textBox");           
    this.container.scrollTop = this.container.scrollHeight; 
  }
}