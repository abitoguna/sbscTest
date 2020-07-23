import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  constructor(private http: HttpClient, private endpoint: Endpoints, private router: Router) { }

  // login service
  login(data: any): Observable<any> {
    return this.http
      .post<any>(this.endpoint.login, data).pipe(
        tap(
          response => {
            const res = response.body;

            this.loginStatus.next(true);
            return response;
        }
        ));
  }


  checkLoginStatus(): boolean {

      const userId = localStorage.getItem('userId');
      if (userId !== null) {

        const token = localStorage.getItem('auth');

        if (token === null) {
          return false;
        }

        return true;
      }
      return false;
    }


  get isLoggedIn() {
    return this.loginStatus.asObservable();
  }
}
