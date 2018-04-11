import { Component, OnInit } from '@angular/core';
import { User } from '../helpers/create-topup';
import { CreateTopupService } from '../service/create-topup.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-topup',
  templateUrl: './create-topup.component.html',
  styleUrls: ['./create-topup.component.css']
})
export class CreateTopupComponent implements OnInit {

  user = new User();
  accountDetais:any;

  rechargeValues: any =[
    { id: 1, rechargeValue : '5'},
    { id: 2, rechargeValue : '10'},
    { id: 3, rechargeValue : '15'},
    { id: 4, rechargeValue : '20'}
  ]
  
  constructor(private createTopupService: CreateTopupService, private router: Router) { }

  ngOnInit() {
   this.createTopupService.getAccountsDetails().subscribe(res => this.accountDetais = res);
  }

  actionOnSubmit(user){
    var isMobileAssociat = (user.financialAccount).split("-")[2];
    if(isMobileAssociat === ''){
      alert("The selected account does not have mobile subscriptions. In order to proceed, Please select an account with mobile subscriptions.")
    }else{
      //this.user.phoneNumber = "+ 353 08 "+this.user.phoneNumber;
      this.user.accountName = (user.financialAccount).split("-")[1];
      this.user.financialAccount = (user.financialAccount).split("-")[0];      
      this.createTopupService.changeMessage(this.user);
      this.router.navigate(['confirm-topup']);  
    }   
  }
  
}
