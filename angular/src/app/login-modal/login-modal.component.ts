import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  username: string;
  errorMessage: string;
  currentUser: any[]=[];

  constructor(private user: UserService, private web: WebsocketService, private modalActive: NgbActiveModal) { }

  ngOnInit() {
  }

  login() {
    if (this.username.length > 10 || this.username.length < 2) {
      this.errorMessage = 'Username must be between 2 and 10 characters';
      return false
    }
    this.user.checkUserDatabase(this.username.toLocaleLowerCase()).subscribe(resp => {
      if (resp.status === 201) {
        const newUser = {
        username: this.username
      }
      this.user.createUser(newUser).subscribe((data: any[]) => {
        this.currentUser = data;
        localStorage.setItem('username', this.currentUser['username']);
        localStorage.setItem('user_id', this.currentUser['user_id']); 
      })
      alert(`Logged in as ${this.username}`)
      this.web.sendSocketUser(newUser);
      this.modalActive.close()
  } 
    },
    error => {
      if (error.status === 401) {
        this.errorMessage = 'Username already taken';
      }
    });
  }

  closeModal() {
    this.modalActive.close()
  }
}
