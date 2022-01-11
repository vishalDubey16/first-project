import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router} from '@angular/router';

import { ApiService } from '../../_service/api-service';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {
  submitted = false;
  public id = this.route.snapshot.params.id

  constructor(private _http: HttpClient, private route:ActivatedRoute,private router:Router ) { }
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


  ngOnInit() {
    //data get form data by id
    let link = ApiService.service_Url + this.id;
    this._http.get(link, this.id).subscribe((result) => {
      console.log(result);
      
      this.userForm = new FormGroup({
        Fist_Name: new FormControl(result['Fist_Name'], [Validators.required]),
        Last_Name: new FormControl(result['Last_Name'], [Validators.required]),
        Email: new FormControl(result['Email'], [Validators.required, Validators.email]),
        Phone: new FormControl(result['Phone'], [Validators.required, Validators.minLength(10)]),
        Country: new FormControl(result['Country'], [Validators.required]),
        State: new FormControl(result['State'], [Validators.required]),
        City: new FormControl(result['City'], [Validators.required]),
        Company: new FormControl(result['Company'], [Validators.required]),
        Designation: new FormControl(result['Designation'], [Validators.required]),
        Message: new FormControl(result['Message'], [Validators.required]),
        
      });

    })
  }

//updated upser
public updateData() {
    this.submitted = true;
    if(this.userForm.invalid)
    {
      return
    }

    let form=this.userForm.value;
    let link=ApiService.service_Url + this.id;
    this._http.put(link,form,this.id).subscribe((result)=>
    {
      alert ("data updated succesfully")
    })
       this.router.navigate(['/dashboard/form-list']);
  }

   //acces fromcontrol for Validation
   get f() { return this.userForm.controls; }

   //reset form
   onReset() {
     this.userForm.reset();
   }

}
