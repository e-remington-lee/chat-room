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
  currentUser: Object;
  username: string;
  messageList: any[]=[];
  userList: any[]=[];
  container: HTMLElement;

  constructor(private data: DataService, private web: WebsocketService) { }

  ngAfterViewInit() {         
    
  }  
  
  onEnter(){
    this.container = document.getElementById("textBox");           
    this.container.scrollTop = this.container.scrollHeight; 
    var today = new Date();

    var message_time = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate()
     + ' ' + today.getHours() +':'+today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds()
    localStorage.setItem('user_id', `${this.userList.length}`);

    const message = {
        user: {
          username: localStorage.getItem('username'),
          user_id: this.currentUser['user_id']
      },
      message: this.messageText,
      message_time: message_time
    }

    this.data.write_message(message).subscribe(data => {
      console.log('post request success!');
    });
    this.web.send_message(message);
    this.messageText ="";
  }

  ngOnInit() {
    this.container = document.getElementById("textBox");           
    this.container.scrollTop = this.container.scrollHeight; 

    this.web.socket_messages().subscribe(message => {
      this.messageList.push(message);
    })

    this.web.user_observable().subscribe(username => {
      this.userList.push(username);
    })

    this.data.message_list().subscribe((data: any[]) => {
      this.messageList = data;
    })

    this.data.user_list().subscribe((data: any[]) => {
      this.userList = data;
    })

    const currentUser = localStorage.getItem('username');
        
    if (currentUser === null) {
      var response = window.prompt("Enter your username", "username");
      var username = response.toLocaleLowerCase();
      this.data.check_user_database(username).subscribe((data: Object) => {
        if (data['Found']=='True') {
          location.reload();
        } else {
          const new_user = {
            username: response
          }
          localStorage.setItem('username', response);
          this.data.create_user(new_user).subscribe(data => {
            this.currentUser = data
            console.log(this.currentUser);
          })
          this.web.send_created_user(new_user);
          console.log('Creating new user...');
        };
      });
    };
  }
}