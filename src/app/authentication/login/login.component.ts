import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/admin/dashboards/_service/api-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder, private _http: HttpClient, private router: Router) { }
  ngOnInit() {

    //check user allready login or not 
    
    var login = localStorage.getItem('login_data');
    if (login != null) {
      this.router.navigate(['/dashboard/index']);
    }
    
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required,Validators.email],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.value.email === '' && this.loginForm.value.password === '') {
      alert("plaese ENter username or password")
    }
    else {
      var formdata = this.loginForm.value
      var link = ApiService.login_Serice + ApiService.login_admin;
      this._http.post(link, formdata).subscribe(data =>{
          var response = data['response'];
        //store responce data in local storage
        const loc_storage = JSON.stringify(data)
        localStorage.setItem('login_data', loc_storage)
         this.router.navigate(['/dashboard/index'])
     
          })
        }
    }
   
    get f() { return this.loginForm.controls; }
}
