import { Component, OnInit } from '@angular/core';
import { CreateTopupService } from '../service/create-topup.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  message:any;
  
  constructor(public createTopupService : CreateTopupService) { }

  ngOnInit() {
    this.createTopupService.currentMessage.subscribe(message => this.message = message)
  }

}
