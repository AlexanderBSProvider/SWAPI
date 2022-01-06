import { Component, OnInit } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  authForm: FormGroup = new FormGroup({
    userEmail: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ])
  })
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  login() {
    this.authService.setUserLogin(this.authForm.get('userEmail')?.value, this.authForm.get('userPassword')?.value);
    //this.authService.setUser(this.authForm.get('userEmail')?.value, this.authForm.get('userPassword')?.value);
  }

  logout() {
    sessionStorage.clear();
    console.log(sessionStorage)
  }
}
