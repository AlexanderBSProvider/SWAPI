import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MatSnackBar]
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

  constructor(private authService: AuthService,
              private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }

  login() {
    this.authService.setUserLogin(this.authForm.get('userEmail')?.value, this.authForm.get('userPassword')?.value);
  }

  logout() {
    sessionStorage.clear();
  }

  showSnackbarMessage() {
    let message = '';

    setTimeout(() => {

      if (sessionStorage.length > 0) {
        message = 'You are logged in';
      } else {
        message = 'Invalid email or password';
      }

    this._snackBar.open(message, '', {
      duration: 2000
    })
    }, 500)
  }
}
