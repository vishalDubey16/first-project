
// import { Injectable} from '@angular/core';
// // declare var $: any;
// @Injectable({providedIn:"root"})

// export class LoaderService{

//     constructor(private spinner:NgxSpinnerService)
//     {

//     }
//     showLoader()
//     {
//         this.spinner.show();
//     }
//     hideLoader()
//     {
//         this.spinner.hide();
//     }
//     get_permission_access(slug,Permission_type){
//         var sessionData = JSON.parse(localStorage.getItem('loc_login'));
//         var permissionList = sessionData['permission_list'];
//         var IsArray = permissionList[slug];
//         if (IsArray == undefined) {
//             return false;
//         }else{
//             var permission = Object.keys(permissionList[slug]).map(function (key) { return permissionList[slug][key]; });
//             return permission.includes(Permission_type);
//         }  
        
//     } 

// }