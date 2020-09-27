import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { clearLocalStorage, setLocalStorageTokenAndUserData } from '../utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  firstname: string;
  lastname: string;
  email: string;
  password: string;
  loading: boolean = false;
  errorMessage: string = '';
  isUserLoggedIn: boolean = false;

  constructor(
    @Inject(forwardRef(() => ApiService)) private _apiService: ApiService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.isUserLoggedIn = true;
      this.firstname = localStorage.getItem('firstname');
      this.lastname = localStorage.getItem('lastname');

      this._apiService.getExpirationCheck().subscribe((response: any) => {
          this.isUserLoggedIn = true;
      },
      error => {
        this.isUserLoggedIn = false;
        clearLocalStorage();

        console.error(error);
      });
    }
  }

  login() {
    this.loading = true;
    this.errorMessage = '';

    const credentials = {
      email: this.email,
      password: this.password
    };

    this._apiService.postLogin(credentials).subscribe((response: any) => {
      this.loading = false;
      this.isUserLoggedIn = true;

      setLocalStorageTokenAndUserData(response);
    },
    error => {
      this.loading = false;

      if (error.error.message) {
        this.errorMessage = error.error.message;
      } else if (error.error.email || error.error.password) {
        this.errorMessage = 'Email and password are required.'
      } else {
        this.errorMessage = 'Something unexpected happened! Please try again.'
      }

      console.error(error);
    });
  }
}
