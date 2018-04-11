import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpService } from "./http.service";
import { User } from '../helpers/create-topup';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class CreateTopupService {

  private BaseURL: string = "http://localhost:8080/"
  constructor(public _http: HttpService) { }

  private messageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();

  getAccountsDetails() {
      return this._http.get(this.BaseURL+"topups/accounts").map( response => response.json() );
  }

  saveTopUp( User ) {        
      return this._http.post( this.BaseURL+'topups/recharge', User )
          .map( response => response.json());
  }

  changeMessage(User) {
    this.messageSource.next(User)
  }

}
