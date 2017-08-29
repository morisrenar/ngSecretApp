import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  user: User;

  ngOnInit() {
    this.user = new User();
  }

  onSignIn() {
    this.authService.makeAuth(this.user.userName, this.user.password);
    console.log(this.user);
  }

}
