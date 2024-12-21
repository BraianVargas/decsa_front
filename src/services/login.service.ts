import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInfo } from '../models/login_info.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private mainUrl: string = "https://main_url:5400/api/"
  private loginUrl: string = this.mainUrl + 'login'

  constructor(private http: HttpClient) { }

  submitLogin(): Observable<LoginInfo>{
    console.log("LOGIN SERVICE OK")
    return this.http.get<LoginInfo>(this.loginUrl).pipe()
  }

}
