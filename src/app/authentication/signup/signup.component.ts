import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from 'src/app/admin/layout/services/layout.service';
import { MustMatch } from 'src/app/_helper/password-match.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  SignUp: FormGroup;
  submitted = false;
  
  constructor(private formbuilder : FormBuilder,private router : Router) { }

  ngOnInit() {
    this.SignUp = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['',[ Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['null',[Validators.required, Validators.minLength(6)]],
      cpass: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    },{
      validator: MustMatch('password', 'cpass')
      
    
    });
  }

 
  onSubmit() {
    this.submitted = true;
    
    if(this.SignUp.invalid)
    {
      return
    }

    else
    {
      console.log(this.SignUp.value);
      alert("Regestration Succesfully")
      }
      this.router.navigate(['']);
  
  }
    get f() { return this.SignUp.controls; }

 
}
