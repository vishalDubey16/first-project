import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';


import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    
  ]
})
export class AuthenticationModule { }
