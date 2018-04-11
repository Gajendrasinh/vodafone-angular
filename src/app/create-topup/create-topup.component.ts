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
    this.createTopupService.changeMessage(this.user);
    this.router.navigate(['confirm-topup']);  
  }
  
}
