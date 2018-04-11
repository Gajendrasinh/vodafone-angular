import {Injectable, Injector} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class HttpService extends Http {

  private router: Router; 
    
  constructor (backend: XHRBackend, options: RequestOptions, inject:Injector) {    
    super(backend, options);
    this.router = inject.get(Router);
  }

  request(url: string|Request, optionArgs?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, optionArgs).catch(this.catchAuthError(this));
  }

  private catchAuthError (self: HttpService) {
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      //console.log(res);
      let customMessage = null;
      try
      {
          customMessage = res.json().customMessage;
      }
      catch(err)
      {
          customMessage = res.text();
      }
      if(customMessage == undefined)
          customMessage = res.json().message;
      
      if(customMessage && customMessage != "No message available")
      {
          
      }
      else
      {
          if (res.status === 401) {
             
          }
          else if ( res.status === 403)
          {
             // this.alertService.error("You are not authorized for this service. Please contact Administrator.", true);
          }
          else if ( res.status >= 500 &&  res.status < 600)
          {
             // this.alertService.error("System Error occured. Please retry.", true);
          }
      }
      return Observable.throw(res);
    };
  }
}