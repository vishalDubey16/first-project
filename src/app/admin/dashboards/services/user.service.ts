// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable()
// export class UserService {

//   constructor(private _http:HttpClient) { }

//     // configuration details
//     // 'Access-Control-Allow-Origin':'*'
//     // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
//     // public API_KEY = '524ac64dcc54a2fa4266694e5c4b90ea-us20';
//     // public AUDIENCE_ID = 'bd8bb8a40c';
//     // public SEND_WELCOME = true;
//     // subscriber details
//     // public SUBSCRIBER_EMAIL = 'vishal.dubey@technomads.in';
//     // public FNAME = 'Vishal';
//     // public LNAME = 'Dubey';

//     //  URL = "https://us20.api.mailchimp.com/3.0/lists/subscribe.json?apikey=" + this.API_KEY + "&id=" + this.AUDIENCE_ID + "&email[email]=" + this.SUBSCRIBER_EMAIL + "&merge_vars[FNAME]=" + this.FNAME + "&merge_vars[LNAME]=" + this.LNAME + "&double_optin=false&send_welcome=" + this.SEND_WELCOME;
  


//   public creatuser(users)
//   {
    
//    return this._http.post('http://localhost:3000/user',users);  //post data to db.json(user)
   
//   }
//   public getAllUser()
//   {
//     return this._http.get('http://localhost:3000/user')  //get data from db.json(user)
//   }

//   public deleteUser(id:number)
//   {
//     debugger
//     return this._http.delete('http://localhost:3000/user/' + id) //delete user
//   }

//   public getById(id:number)
//   {
   
//     return this._http.get('http://localhost:3000/user/' + id) //data get by Id
//   }
//   update(id: number, users: any) {

//     return this._http.put('http://localhost:3000/user/' + id,users) //update user
//    }

//   // getmail()
//   // {
    
//   //   return this._http.get(this.URL) //for get mail
//   // }


// }