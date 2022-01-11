import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user.service';
import { SortingPipe } from '../../_helper/sorting.pipe';
import { ApiService } from '../../_service/api-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {
  allUser: Object;
  searchText;
  p: number = 1;
  SortbyParam = '';


  constructor(private _http: HttpClient) { }

  ngOnInit() {  // get user
      let link = ApiService.service_Url;
      this._http.get(link).subscribe((Response) => {
      this.allUser=Response
    
    })
  }
  public deleteUser(id) //delete user
  {
        let link = ApiService.service_Url + id;
        this._http.delete(link, id).subscribe((result) => {
        alert("data deleted Succesfully")
        this.ngOnInit();
    })

  }

}
