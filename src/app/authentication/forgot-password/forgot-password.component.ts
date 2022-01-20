import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/admin/dashboards/_service/api-service';
declare var $: any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  submitted = false;
  result : any


  constructor(private formbuilder: FormBuilder,private http : HttpClient) { }

  ngOnInit() {
   
    this.forgotForm = this.formbuilder.group({
      email: ['', [Validators.required,Validators.email]],
      });
  }

  onSubmit()
  {
     debugger
      this.submitted= true;
      console.log(this.forgotForm.value);
      var formData = this.forgotForm.value;
  //  formData.append('Email',this.forgotForm.value.email);
      var link = ApiService.login_Serice + ApiService.Check_ForgotEmail
      this.http.post(link,formData).subscribe((res)=>{
      console.log(res);
      alert("reser mail send succefully !! check your mail")
    })

  }
  get f() { return this.forgotForm.controls; }
  }


