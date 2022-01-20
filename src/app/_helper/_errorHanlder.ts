import {Injectable} from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http'
import { throwError} from 'rxjs';

@Injectable({providedIn:'root'})

export class ErrorHanlder{

// constructor(){

// }
private handleError(errorResponse: HttpErrorResponse) {
    let errorMsg='';
    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it   accordingly.
      errorMsg='An error occurred:',   errorResponse.error.message;
    }
   else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMsg='Backend returned code ${errorResponse.status}, '+
        'body was: ${errorResponse.error}';
    }
    // return an observable with a user-facing error message
    return throwError(errorMsg);
  };

}
