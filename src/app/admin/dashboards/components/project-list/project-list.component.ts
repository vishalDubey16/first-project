import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../../layout/services/layout.service';
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
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  public login_detail = JSON.parse(localStorage.getItem('login_data')) // get logindetail form local storage
  access_token = '';
  itemdata: any;
  result: any;
  parameter_type_id: any;
  parameter_type_name: any;
  remark: any;
  display = "none";

  constructor(private router : Router,private layoutService : LayoutService) { }

  ngOnInit() {
    this.DatatableList();
    window.functions = window.functions || {};
    window.functions.ParameterType_Model = this.ParameterType_Model.bind(this);
    // datatable 
        $(".filter-btn").on("click", function (e) {
        $('body,.filter-src-backdroup').addClass('filter-pop-open');
        return false;        
        });
        $(".filter-src-close").on("click", function (e) {
        $('body,.filter-src-backdroup').removeClass('filter-pop-open');
        });
  // datatable end
  

  }
  logOut()
 {
    localStorage.removeItem('login_data');
    localStorage.clear();
    this.router.navigate(['/login']);

  }
  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }

  ParameterType_Model(parameter_type_id, parameter_type_name, remark) {
    if (parameter_type_id != '0') {
      $('.parameter_title').text('Edit Category Type');
      $("#parameter_type_id").val(parameter_type_id);
      $("#parameter_type_name").val(parameter_type_name);
      $("#remark").val(remark);
      $('#model_parameter_type').modal('hide');
    } else {
      $('.parameter_title').text('Add Category Type');
      $('#parameter_type_id').val('');
      $('#parameter_type_name').val('');
      $('#remark').val('');
    }
     

    
  }
  
  Plan_Model(plan_id, plan_type, plan_name, title, month, amount, description) 
  {
    if (plan_id != '0') {
      $('.parameter_title').text('Edit Plan');
     
      $('#plan_name').val(plan_name);
      $('#title').val(title);
      $('#month').val(month);
      $('#amount').val(amount);
      $('#description').val(description);
    } else {
      $('.parameter_title').text('Add Plan');
      $('#plan_id').val('');
    
      $('#plan_name').val('');
      $('#title').val('');
      $('#month').val('');
      $('#amount').val('');
      $('#description').val('');
    }
    $('#model_plan').modal('show');
  }


  DatatableList() {
  var access_token = this.login_detail.data.access_token; // get acces token
  var user_id = this.login_detail.data.user_id;  // get user id
  var link = ApiService.login_Serice + ApiService.Parameter_Type_Datatable ;
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
            "visible": false,
            targets: [0],
            render: function (data, type, row) {
              return row['id'];
            }
          },
          {
            targets: [1],
            render: function (data, type, row) {
              return row['parameter_type_name'];
            }
          },
          {
            targets: [2],
            render: function (data, type, row) {
              return row['remark'];
            }
          },
          {
            targets: [3],
            render: function (data, type, row) {
              var status = '';
              if (row['is_active'] == 1) {
                status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')"  class="badge badge-pill bg-success-light">Active</span></a>';
              } else if (row['is_active'] == 0) {
                status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')"  class="badge badge-pill bg-danger-light">Inactive</span></a>';
              }
              return status;
            }
          },
          {
            targets: [4],
            render: function (data, type, row) {
              var action_btn = '';
              action_btn += '<a onclick="functions.ParameterType_Model(' + row['id'] + ',' + '&apos;' + row['parameter_type_name'] + '&apos;' + ',' + '&apos;' + row['remark'] + '&apos;' + ')" data-toggle="modal" data-target="#model_parameter_type" href="javascript:void(0);" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a>';
              action_btn += '<a onclick="functions.Delete_ParameterType(' + row['id'] + ')" href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>';
              return action_btn;
            }
          },
          { "bSortable": false, "targets": [2, 3, 4] },
        ],
        "sPaginationType": "full_numbers",
        "bProcessing": true,
        "bServerSide": true,
        "ajax": {
          "type": "POST",
          "url": link,
          'data': {
            'parameter_type_name':$("#filter_parameter_type").val(),
            'is_active':$("#filter_status").val(),
          },
          "headers": {
            'Authorization': 'Bearer ' + access_token
          },

        },
        
      })
    }, 100);
  }


  FilterSearch(){
    $('body, .filter-src-backdroup').removeClass('filter-pop-open');
    this.DatatableList();
  }
  FilterReset(){
    $(".filter-src-main input[type='text']").val("");
      $(".filter-src-main select").val('').trigger("change"); 
      $('body, .filter-src-backdroup').removeClass('filter-pop-open');
      this.DatatableList();
  }
 
}
