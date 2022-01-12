import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../_service/api-service';
import { pipe} from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  allUser: any;

  constructor(private _http : HttpClient,private route : ActivatedRoute,private router:Router) { }

  ngOnInit() {

    let id = this.route.snapshot.params.id
    let link = ApiService.service_Url + id;
    this._http.get(link).subscribe((res)=>{
    this.allUser=res
    console.log(this.allUser);
      
    })
  }//data get form data by id
   this._http.get(link).pipe(map((userdata:any) => this.allUser =( userdata)))
   console.log(this.allUser);
  //  get profile info using map operator

 }

