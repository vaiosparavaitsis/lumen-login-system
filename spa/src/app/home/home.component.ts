import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { clearLocalStorage } from '../utils/utils';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isUserLoggedIn: boolean = false;

  constructor(
    private router: Router,
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
          this.router.navigate(['/login']);

          console.error(error);
        });
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this._apiService.postLogout().subscribe((response: any) => {
      this.isUserLoggedIn = false;
      clearLocalStorage();
      this.router.navigate(['/login']);
    });
  }
}
