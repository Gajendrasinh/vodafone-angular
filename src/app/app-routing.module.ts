import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { CreateTopupComponent } from './create-topup/create-topup.component';
import { ConfirmPaymentComponent } from './confirm-topup/confirm-payment.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path: '', redirectTo: 'create-topup', pathMatch: 'full'},
  { path: 'create-topup', component: CreateTopupComponent },
  { path: 'confirm-topup', component: ConfirmPaymentComponent },
  { path: 'success', component: SuccessComponent }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
