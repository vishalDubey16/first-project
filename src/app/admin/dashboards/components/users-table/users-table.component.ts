import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Options } from 'selenium-webdriver';
import { ApiService } from '../../_service/api-service';
import * as jquery from 'jquery';
// window['$'] = window['jQuery'] = $;
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
}

DatatableList()
{
       var access_token = this.login_detail.data.access_token;
    // get acces_token from localstorage 
      var user_id = this.login_detail.data.user_id;
    // get acces user_id from localstorage 
    
    //api url to post link
    var link = ApiService.login_Serice + ApiService.User_detail ;

    //set acces_token in header with bearer
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token,
      });
      
      //post link along with header for authentication
      this._http.post(link,'',{ headers: reqHeader }).subscribe((user_detail) => {
      this.allUser=user_detail

       })
    // $(document).ready(function () {
    //     $(window).bind("load", function () {
    //           // $(".overlay, body").addClass("loaded");
    //     });

//    setTimeout(() => {
//         $("#DataTableList").DataTable().destroy();
//         var table = $('#DataTableList').DataTable({
//         "lengthMenu": [[20, 40, 60, 80, 100], [20, 40, 60, 80, 100]],
//         scrollX: true,
//         "sScrollY": ($(window).height() - 320),
//         "order": [],
//         "aaSorting": [],
//         searching: false,

//         language: {
//           oPaginate: {
//             sNext: '<i class="fa fa-angle-right" title="Next"></i>',
//             sPrevious: '<i class="fa fa-angle-left" title="Privious"></i>',
//             sFirst: '<i class="fa fa-angle-double-left" title="First"></i>',
//             sLast: '<i class="fa fa-angle-double-right" title="Last"></i>'
//           },
//           "sProcessing": 'loading...',
          
//         },
//         columnDefs: [
//           {
//             "visible": false,
//             targets: [0],
//             render: function (data, type, row) {
//               return row['id'];
//             }
//           },
//           {
//             targets: [1],
//             render: function (data, type, row) {
//               return row['parameter_type_name'];
//             }
//           },
//           {
//             targets: [2],
//             render: function (data, type, row) {
//               return row['remark'];
//             }
//           },
//           {
//             targets: [3],
//             render: function (data, type, row) {
//               var status = '';
//               if (row['is_active'] == 1) {
//                 status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')"  class="badge badge-pill bg-success-light">Active</span></a>';
//               } else if (row['is_active'] == 0) {
//                 status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')"  class="badge badge-pill bg-danger-light">Inactive</span></a>';
//               }
//               return status;
//             }
//           },
//           {
//             targets: [4],
//             render: function (data, type, row) {
//               var action_btn = '';
//               action_btn += '<a onclick="functions.ParameterType_Model(' + row['id'] + ',' + '&apos;' + row['parameter_type_name'] + '&apos;' + ',' + '&apos;' + row['remark'] + '&apos;' + ')" data-toggle="modal" data-target="#model_parameter_type" href="javascript:void(0);" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a>';
//               action_btn += '<a onclick="functions.Delete_ParameterType(' + row['id'] + ')" href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>';
//               return action_btn;
//             }
//           },
//           { "bSortable": false, "targets": [2, 3, 4] },
//         ],
//         "sPaginationType": "full_numbers",
//         "bProcessing": true,
//         "bServerSide": true,
//         "ajax": {
//           "type": "POST",
//           "url": link,

//           'data': {
//             'parameter_type_name': $("#filter_parameter_type").val(),
//             'is_active': $("#filter_status").val(),
//           },

//           "headers": {
//             'Authorization': 'Bearer ' + access_token
//           },
//         },
//       })
//     }, 100);
// }


}
}

