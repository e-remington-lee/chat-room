import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { WebsocketService } from '../websocket.service';
import { UserService } from '../user.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../login-modal/login-modal.component';
  
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  messageText: string;
  currentUser: Object;
  messageList: any[]=[];
  userList: any[]=[];
  container: HTMLElement;

  constructor(private user: UserService, private data: DataService, private web: WebsocketService, private modal: NgbModal) { }

  ngOnInit() {
    this.container = document.getElementById("textBox");           
    this.container.scrollTop = this.container.scrollHeight; 

    this.web.receiveSocketMessages().subscribe(message => {
      console.log(`Pushed message ${message}`)
      console.log(this.messageList)
      this.messageList.push(message);
    });

    this.web.receiveSocketUsers().subscribe(username => {
      console.log(`Pushed username ${username}`)
      console.log(this.userList)
      this.userList.push(username);
    });

    this.data.getMessageList().subscribe((data: any[]) => {
      this.messageList = data;
    });

    this.user.getUserList().subscribe((data: any[]) => {
      this.userList = data;
    });
  }

  onEnter(){
    if (this.messageText === "") {
      return false
    } else {
      this.container = document.getElementById("textBox");           
      this.container.scrollTop = this.container.scrollHeight; 
      var today = new Date();
  
      var message_time = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate()
       + ' ' + today.getHours() +':'+today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds()
       
      const message = {
        user: {
            username: localStorage.getItem('username'),
            user_id: localStorage.getItem('user_id')
          },
        message: this.messageText,
        message_time: message_time
      }
      this.data.writeMessage(message).subscribe(data => {
        this.web.sendSocketMessage(message);
      });
      this.messageText ="";
    }
  }

  modalOpen() {
    let modalOptions: NgbModalOptions = {
      backdrop: 'static'
    }
    const modal = this.modal.open(LoginModalComponent, modalOptions);
  }

}
