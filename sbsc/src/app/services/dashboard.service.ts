import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Endpoints } from 'src/environments/endpoints';
import { Dashboard } from '../interfaces/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dash$: Observable<Dashboard>;
  constructor(private http: HttpClient, private endpoints: Endpoints) { }


  // Load dashboard data
  loadDash(): Observable<Dashboard> {
    this.dash$ = this.http.get<any>(this.endpoints.loadDash)
    .pipe(
      map( res => res[0]),
      catchError(this.handleError)
    );
    return this.dash$;
  }


  private handleError(err: any) {
    let errorMessage: string;

    errorMessage = `An error occured: ${err.error}`;

    // console.log(err.error);
    return throwError(errorMessage);
  }
}
