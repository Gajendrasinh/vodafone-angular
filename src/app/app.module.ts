import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateTopupComponent } from './create-topup/create-topup.component';
import { ConfirmPaymentComponent } from './confirm-topup/confirm-payment.component';
import { CreateTopupService } from './service/create-topup.service';
import { HttpService } from "./service/http.service";
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateTopupComponent,
    ConfirmPaymentComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HttpService, CreateTopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
