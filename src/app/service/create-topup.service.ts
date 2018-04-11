import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpService } from "./http.service";
import { User } from '../helpers/create-topup';

import { PNotifyService, PNotifySettings } from 'ng2-pnotify';
import PNotify from 'pnotify';
import 'pnotify/dist/pnotify.css';
import 'pnotify/dist/pnotify.buttons.js';
import 'pnotify/dist/pnotify.buttons.css';


@Injectable()
export class CreateTopupService {

  private pnotifyService: PNotifyService;
  
  private BaseURL: string = "http://localhost:8080/";

  constructor(public _http: HttpService) {
    this.pnotifyService = new PNotifyService({ styling: 'bootstrap3' });
  }

  private messageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();

  success(message: string, keepAfterNavigationChange = true, section: string = '') {
    if(message && message != ""){
        this.pnotifyService.success({ text: message, title: 'Success' });
    } 
  }

  error(message: string, keepAfterNavigationChange = true, section: string = '') {
    this.pnotifyService.error({ text: message, title: 'Error' });
  }

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
