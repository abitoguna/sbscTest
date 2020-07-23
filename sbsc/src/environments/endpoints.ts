import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class Endpoints {
  // Base Url
  public baseUrl = environment.apiUrl;

  // Auth Url
  login = this.baseUrl + 'login';

  // Dashboard
  loadDash = this.baseUrl + 'dashboard';
}
