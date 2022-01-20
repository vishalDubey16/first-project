import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Options } from 'selenium-webdriver';
import { ApiService } from '../../_service/api-service';
import * as jquery from 'jquery';


declare var $: any;
interface JQuery {
  tooltip(options?: any): any;
}
declare global {
  interface Window { functions: any }
}

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: [
    './users-table.component.scss',
    
  ]
})
export class UsersTableComponent implements OnInit {

  public login_detail = JSON.parse(localStorage.getItem('login_data'))
  access_token = '';
  allUser: any = []; 

  constructor(private _http: HttpClient) { }

ngOnInit() {

      this.DatatableList();
      // window.functions = window.functions || {};
      // var access_token = this.login_detail.data.access_token;
      // // get acces_token from localstorage 
      //   var user_id = this.login_detail.data.user_id;
      // // get acces user_id from localstorage 
      
      // //api url to post link
      // var link = ApiService.login_Serice + ApiService.User_detail ;
  
      // //set acces_token in header with bearer
      // var reqHeader = new HttpHeaders({ 
      //   'Content-Type': 'application/json',
      //   'Authorization': 'Bearer ' + access_token,
      //   });
        
      //   //post link along with header for authentication
      //   this._http.post(link,'',{ headers: reqHeader }).subscribe((user_detail) => {
      //   this.allUser=user_detail
  
}
DatatableList() {

  debugger
  var access_token = this.login_detail.data.access_token;
  var user_id = this.login_detail.data.user_id;
  var link = ApiService.login_Serice + ApiService.User_detail ;
  setTimeout(() => {
    $("#DataTableList").DataTable().destroy();
    var table = $('#DataTableList').DataTable({
      "lengthMenu": [[20, 40, 60, 80, 100], [20, 40, 60, 80, 100]],
      scrollX: true,
      "sScrollY": ($(window).height() - 320),
      "order": [],
      "aaSorting": [],
      searching: false,
      language: {
        oPaginate: {
          sNext: '<i class="fa fa-angle-right" title="Next"></i>',
          sPrevious: '<i class="fa fa-angle-left" title="Privious"></i>',
          sFirst: '<i class="fa fa-angle-double-left" title="First"></i>',
          sLast: '<i class="fa fa-angle-double-right" title="Last"></i>'
        },
        "sProcessing": 'loading...',

      },
      columnDefs: [
        {
          targets: [0],
          'sClass': 'text-left',
          render: function (data, type, row) {
            return '<h2 class="text-primary">' + row['first_name'] + ' ' + row['last_name'] + '</h2>';

          }
        },
        {
          targets: [1],
          render: function (data, type, row) {
            return row['user_name'];
          }
        },
        {
          targets: [2],
          render: function (data, type, row) {
            return row['email'];
          }
        },
        {
          targets: [3],
          render: function (data, type, row) {
            return row['created_at'];
          }
        },
        {
          targets: [4],
          render: function (data, type, row) {
            var status = '';
            if (row['is_active'] == 1) {
              status += '<a title="Click to change status" href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')"  class="badge badge-pill bg-success-light">Active</span></a>';
            } else if (row['is_active'] == 0) {
              status += '<a title="Click to change status" href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')"  class="badge badge-pill bg-danger-light">Inactive</span></a>';
            }
            return status;
          }
        },

        {
          targets: [5],
          "visible": false,
          render: function (data, type, row) {
            var action_btn = '';
            action_btn += '<a title="Click to view documents" onclick="functions.Documents_Model(' + row['id'] + ')" href="javascript:void(0);" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-file-alt  mr-1"></i> Documents</a>';
            return action_btn;
          }
        },
        // { "bSortable": false, "targets": [2,7,9,10] },
      ],
      "sPaginationType": "full_numbers",
      "bProcessing": true,
      "bServerSide": true,
      "ajax": {
        "type": "POST",
        "url": link,
        'data': {
         },
        "headers": {
          'Authorization': 'Bearer ' + access_token
        },

      },
    })
  }, 100);
}


}

