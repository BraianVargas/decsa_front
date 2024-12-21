import { NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../../../services_mock';
import { loginInterceptor } from '../../../app/interceptors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIcon,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm: FormGroup; 
  constructor (private fb : FormBuilder, private loginService : LoginService, private router: Router){
    this.loginForm = this.fb.group({
      username : [ 
        '', 
        Validators.compose([
          Validators.required
        ])
      ],
      password : [ 
        '', 
        Validators.compose([
          Validators.required
        ])
      ]
    })
  }



  hide = signal(true)
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  

  onLogin(event: Event){
    const username = this.loginForm.get('username')
    const password = this.loginForm.get('password')

    console.log("onLogin ejecutado")
    console.log(username?.value);
    console.log(password?.value);

    const data = this.loginService.submitLogin()

    console.log("*******************************************")
    console.log("LOGIN COMPONENT BEFORE RETURN")
    console.log(data)
    console.log("*******************************************")

    // const interceptor = inject(loginInterceptor)

    return this.router.navigateByUrl('/base_dashboard')
  }

}
