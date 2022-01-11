import { HttpClient, HttpHeaders } from '@angular/common/http';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../_service/api-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public Country = ['India','USA','UK','China','Japan '];

  public submitted = false;


  constructor(private router: Router, private _http: HttpClient) { }

  public userForm: FormGroup = new FormGroup({
    Fist_Name: new FormControl('', [Validators.required]),
    Last_Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Phone: new FormControl('', [Validators.required, Validators.minLength(6)]),
    Country: new FormControl('', [Validators.required]),
    State: new FormControl('', [Validators.required]),
    City: new FormControl('', [Validators.required]),
    Company: new FormControl('', [Validators.required]),
    Designation: new FormControl('', [Validators.required]),
    Message: new FormControl('', [Validators.required]),
    
  });

  ngOnInit(): void {
  }
  onSubmitForm() {

    this.submitted = true;
    if (this.userForm.invalid) {
      return
    }
    else {
      // form.append('transactionData',JSON.stringify(transactionData));
      // form.append('original_status',original_status);
      // form.append('isSplit',isSplitData);
      var form = this.userForm.value;
      var link = ApiService.service_Url;
      this._http.post(link, form).subscribe(data => {
        
      })
      console.log(this.userForm.value.Email);
      //for send mail
      var formData = new FormData();

      formData.append('Email',this.userForm.value.Email);
      formData.append('Fist_Name',this.userForm.value.Fist_Name);
      formData.append('Last_Name',this.userForm.value.Last_Name);
      formData.append('Phone',this.userForm.value.Phone);
      formData.append('Country',this.userForm.value.Country);
      formData.append('State',this.userForm.value.State);
      formData.append('City',this.userForm.value.City);
      formData.append('Company',this.userForm.value.Company);
      formData.append('Designation',this.userForm.value.Designation);
      formData.append('Message',this.userForm.value.Message);

          var mailLink = ApiService.mail_Sevice + ApiService.Send_mail;
          this._http.post(mailLink, formData).subscribe((result) => {
          // console.log(result);
          alert("mail send succesfully")
 })
    }
    this.router.navigate(['/dashboard/form-list']);
  }

  //acces fromcontrol for Validation
  get f() { return this.userForm.controls; }

  //reset form
  onReset() {
    this.userForm.reset();
  }
}
