import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgoComponent } from './ngo/ngo.component';
import { DonorComponent } from './donor/donor.component';
import { DonationComponent } from './donation/donation.component';
import { DonationRequestComponent } from './donation-request/donation-request.component';

const routes: Routes = [
  { path: 'ngo', component: NgoComponent },
  { path: 'donor', component: DonorComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'donation_request', component: DonationRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
