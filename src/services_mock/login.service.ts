import { HttpClient } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { LoginInfo } from '../models/login_info.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private mainUrl: string = "https://main_url:5400/api/";
  private loginUrl: string = this.mainUrl + 'login';
  
  private mockResponse = {
    "access_token": "EPEqWxPaSyWntDtkL7OHMjzOMiDycr",
    "expires_in": 36000,
    "token_type": "Bearer",
    "scope": "secretaria",
    "refresh_token": "ao9HExnkneMDr8NmTjDfmmlg7NoXlm"
  }

  constructor(private http: HttpClient) { }
  submitLogin(): Observable<any>{

    console.log("LOGIN SERVICE OK")
    console.log("*******************************************")
    // console.log("RESPONSE")
    // console.log(this.mockResponse)
    // console.log("*******************************************")
    // const urlreq = this.http.get(this.loginUrl).subscribe((response) => {
    //   console.log('request ejecutada')
    // })
    
    return of(this.mockResponse)
  }

  verifRole() : String{
    // verifica si el rol existe en local storage
    // verifica cual rol tiene
    console.log("******************************************************")
    console.log("VERIFICANDO ROLES")
    console.log("******************************************************")
    console.log("SIMULA RESPONSE - OK")
    console.log("******************************************************")
    
    return this.mockResponse.scope
  }


}
