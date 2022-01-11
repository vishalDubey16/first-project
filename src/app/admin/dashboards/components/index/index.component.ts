import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../../layout/services/layout.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private layoutService: LayoutService,private router: Router) { }

  ngOnInit() {
   
    var login = localStorage.getItem('login_data');
    if (login ==null) {
      this.router.navigate(['/login']);
    }
  }

  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }

  logOut()
 {
    localStorage.removeItem('login_data');
    localStorage.clear();
    this.router.navigate(['/login']);

  }
}
