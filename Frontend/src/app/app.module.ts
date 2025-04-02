import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgoComponent } from './ngo/ngo.component';
import { DonorComponent } from './donor/donor.component';
import { DonationComponent } from './donation/donation.component';
import { DonationRequestComponent } from './donation-request/donation-request.component';

@NgModule({
  declarations: [
    AppComponent,
    NgoComponent,
    DonorComponent,
    DonationComponent,
    DonationRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
