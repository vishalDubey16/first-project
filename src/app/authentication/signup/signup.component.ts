import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from 'src/app/admin/layout/services/layout.service';
import { MustMatch } from 'src/app/_helper/password-match.validators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/admin/dashboards/_service/api-service';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  SignUp: FormGroup;
  submitted = false;
  
  constructor(private formbuilder : FormBuilder,private router : Router,private http: HttpClient) { }

  ngOnInit() {
    this.SignUp = this.formbuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['',[ Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['null',[Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required],
      
    },{
      validator: MustMatch('password', 'confirm_password')
      });
  }

    public onSubmit() {
      if(this.SignUp.invalid)
      {
      this.submitted = true;
     return
    }

    else{
      var formdata= this.SignUp.value;

    // formdata.append('first_name',this.SignUp.value.first_name);
    // formdata.append('last_name',this.SignUp.value.last_name);
    // formdata.append('email',this.SignUp.value.email);
    // formdata.append('password',this.SignUp.value.password);
    // formdata.append('confirm_password',this.SignUp.value.confirm_password);
     var link = ApiService.login_Serice + ApiService.User_SignUp
      this.http.post<any>(link, formdata).subscribe(data =>{
      
      var response = data['response'];
    console.log(response);
    //store responce data in local storage
    const loc_storage = JSON.stringify(data)
    localStorage.setItem('signup', loc_storage)
     })
     this.router.navigate(['']);
    }
  }

      get f() { return this.SignUp.controls; }
    
      
}
