import { Component, OnInit, Input } from '@angular/core';
import { User } from '../helpers/create-topup';
import { CreateTopupService } from '../service/create-topup.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.css']
})
export class ConfirmPaymentComponent implements OnInit {

  message:any;

  randomID = Math.floor((Math.random() * 10000) + 1);

  constructor(public createTopupService : CreateTopupService, public router :  Router) { }

  ngOnInit() {
    console.log(this.randomID)
    this.createTopupService.currentMessage.subscribe(message => this.message = message)
    console.log(this.message)
  }

  confirm(){
    this.message.conversionID  = Math.floor((Math.random() * 10000) + 1);
    this.message.timeStamp = new Date();
    this.createTopupService.saveTopUp(this.message).subscribe(res =>{
        if(res.code ="Success"){
          this.createTopupService.changeMessage(res);
          this.router.navigate(['success']);
          localStorage.removeItem("topup");
        }
      }
    );
  }

  backToCreate(){
    this.createTopupService.changeMessage(this.message);
    this.router.navigate(['create-topup']);
  }

}
