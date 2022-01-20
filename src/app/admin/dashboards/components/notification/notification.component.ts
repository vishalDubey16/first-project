import { Component, OnInit } from '@angular/core';
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
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  public login_detail = JSON.parse(localStorage.getItem('login_data'))
  access_token = '';
 
constructor() { }

  ngOnInit() {
     // datatable 
           $(".filter-btn").on("click", function (e) {
          $('body,.filter-src-backdroup').addClass('filter-pop-open');
          return false;        
          });
          $(".filter-src-close").on("click", function (e) {
          $('body,.filter-src-backdroup').removeClass('filter-pop-open');
          });
     // datatable end

    //  $('.filter-src-main').hide();

    //  $("#filter_search").click(function(){
    //   $(".filter-src-main").toggle();
    // });
   
    this.DatatableList();

  }

 
 
 public DatatableList() {

  
  var access_token = this.login_detail.data.access_token;
  var user_id = this.login_detail.data.user_id;
  var link = ApiService.login_Serice + ApiService.Notification_Datatable ;
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
          render: function (data, type, row) {

            if (row['is_read'] == 1) {
              return '<p class="text-success">Read</p>';
            } else if (row['is_read'] == 0) {
              return '<p class="text-warning">Unread</p>';
            }
          }
        },
        {
          targets: [1],
          render: function (data, type, row) {
            return '<h2 class="text-primary">' + row['user_name'] + '</h2>';
          }
        },
        {
          targets: [2],
          render: function (data, type, row) {
            return '<h2 class="">' + row['title'] + '<span>' + row['description'] + '</span></h2>';
          }
        },
        {
          targets: [3],
          render: function (data, type, row) {
            if (row['notification_icon'] != null && row['notification_icon'] != '') {
              return '<div class="avatar"><img class="avatar-img rounded border border-white" alt="User Image" src="' + row['notification_icon'] + '"></div>';
            }
            return '<div class="avatar"><img class="avatar-img rounded border border-white" alt="User Image" src="assets/img/no-image-found.png"></div>';
          }
        },
        {
          targets: [4],
          "visible": false,
          render: function (data, type, row) {
            return row['screen_no'];
          }
        },
        {
          targets: [5],
          render: function (data, type, row) {
            return row['created_by'];
          }
        },
        {
          targets: [6],
          render: function (data, type, row) {
            return row['created_at'];
          }
        }, 
        { "bSortable": false, "targets": [2, 3] },
      ],
      "sPaginationType": "full_numbers",
      "bProcessing": true,
      "bServerSide": true,
      "ajax": {
        "type": "POST",
        "url": link,
        'data': {
          'user_name':$("#filter_user_name").val(),
          'title':$("#filter_title").val(),
          'is_read':$("#filter_is_read").val(),
        },
        "headers": {
          'Authorization': 'Bearer ' + access_token
        },

      },
      "fnInitComplete": function () {
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