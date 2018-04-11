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

  constructor(public createTopupService : CreateTopupService, public router :  Router) { }

  ngOnInit() {
    this.createTopupService.currentMessage.subscribe(message => this.message = message)
  }

  confirm(){
    this.createTopupService.saveTopUp(this.message).subscribe(res =>{
      console.log(res)
      if(res){
        this.router.navigate(['success']);
        }
      }
    );
  }

  backToCreate(){
    this.createTopupService.changeMessage(this.message);
    this.router.navigate(['create-topup']);
  }

}
