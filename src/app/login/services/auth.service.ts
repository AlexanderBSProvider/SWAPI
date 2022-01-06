import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, of} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'https://iteam-backend.herokuapp.com/';
  token:any;

  userRegister = {
    email: "",
    password: "",
    googleId: "",
    name: "asdaa",
    isAdmin: true
  }

  userLogin = {
    email: "",
    password: ""
  }

  constructor(private http: HttpClient, private router: Router) { }

  // register(email: string, password: string) {
  //   this.http.post(this.api + 'users/login', {email, password}).subscribe((response:any) => {
  //     console.log(response)
  //     this.router.navigate(['']);
  //     sessionStorage.setItem('auth_token', response.token);
  //   });
  // }

  register(user:any) {
    this.http.post(this.api + 'users/registration', user).subscribe((response:any) => {
      console.log(response,'res')
      this.router.navigate(['']);
      sessionStorage.setItem('auth_token', response.token);
    });
  }

  login(user:any) {
    return this.http.post(this.api + 'users/login', user).subscribe((response:any) => {
      this.router.navigate(['dashboard']);
      console.log(response,'res')
      sessionStorage.setItem('auth_token', response.token);
      console.log(sessionStorage, 'sessss')
    }
      );
  }

  logout() {
    sessionStorage.clear();
  }

  setUserRegister(email:string, password:string){
    this.userRegister.email = email;
    this.userRegister.password = password;
    // console.log(JSON.stringify(this.userRegister))
    this.register(this.userRegister);
  }

  setUserLogin(email:string, password:string) {
    this.userLogin.email = email;
    this.userLogin.password = password;
    this.login(this.userLogin);
  }
}
