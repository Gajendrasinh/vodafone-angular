import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpService } from "./http.service";
import { User } from '../helpers/create-topup';

@Injectable()
export class CreateTopupService {

  private BaseURL: string = "https://jsonplaceholder.typicode.com/"
  constructor(public _http: HttpService) { }

  private messageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();

  getAccountsDetails() {
      return this._http.get(this.BaseURL+"users").map( response => response.json() );
  }

  saveTopUp( User ): Observable<User> {        
      return this._http.post( this.BaseURL+'create-top', User )
          .map( response => response.json() as User );
  }

  changeMessage(User) {
    this.messageSource.next(User)
  }

}
