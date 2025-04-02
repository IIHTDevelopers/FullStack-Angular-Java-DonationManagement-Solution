import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donation } from './donation';
import { DonationService } from './donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent implements OnInit {
  formValues!: FormGroup;
  modelObj: Donation = new Donation();
  allData: Donation[] = [];
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private fB: FormBuilder, private api: DonationService) {}

  ngOnInit(): void {
    this.formValues = this.fB.group({
      donar_id: ['', Validators.required],
      ngo_id: ['', Validators.required],
      donation_type: ['', Validators.required],
      amount: ['', Validators.required],
      donation_date: ['', Validators.required],
    });
    this.getAllDonationData();
  }

  get donar_id() {
    return this.formValues.get('donar_id');
  }
  get ngo_id() {
    return this.formValues.get('ngo_id');
  }
  get donation_type() {
    return this.formValues.get('donation_type');
  }
  get amount() {
    return this.formValues.get('amount');
  }
  get donation_date() {
    return this.formValues.get('donation_date');
  }

  //calls when you click on Add  button
  addDonation() {
    this.formValues.reset(); //reset the form
    this.showAdd = true;
    this.showUpdate = false;
  }

  //Save Data
  postDonationData() {
    const donationObj = {
      // donationId: this.formValues.value.donar_id,
      donarId: this.formValues.value.donar_id,
      ngoId: this.formValues.value.ngo_id,
      donationType: this.formValues.value.donation_type,
      amount: this.formValues.value.amount,
      donationDate: this.formValues.value.donation_date,
    };

    this.api.postDonation(donationObj).subscribe((res) => {
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValues.reset(); //reset the form
      this.getAllDonationData();
    });
  }

  //Get data

  getAllDonationData() {
    this.api.getDonation().subscribe((res) => {
      let arr: Donation[] = [];
      res.forEach(
        (dn: {
          donationId: number;
          donarId: number;
          ngoId: number;
          donationType: string;
          amount: number;
          donationDate: string;
        }) => {
          const donation = new Donation();
          donation.donation_id = dn.donationId;
          donation.donar_id = dn.donarId;
          donation.ngo_id = dn.ngoId;
          donation.donation_type = dn.donationType;
          donation.amount = dn.amount;
          donation.donation_date = dn.donationDate;
          arr.push(donation);
        }
      );
      this.allData = arr;
    });
  }

  //Delete data
  deleteDonation(obj: any) {
    this.api.deleteDonation(obj.donation_id).subscribe((res) => {
      this.getAllDonationData();
    });
  }

  // set values of specfid one to html form fields to edit
  donationEdit(obj: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.modelObj.donation_id = obj.donation_id;
    this.formValues.controls['donar_id'].setValue(obj.donar_id);
    this.formValues.controls['ngo_id'].setValue(obj.ngo_id);
    this.formValues.controls['donation_type'].setValue(obj.donation_type);
    this.formValues.controls['amount'].setValue(obj.amount);
    this.formValues.controls['donation_date'].setValue(obj.donation_date);
  }

  //Update  data
  updateDonationData() {
    const donationObj = {
      donationId: Number(this.modelObj.donation_id),
      donarId: Number(this.formValues.value.donar_id),
      ngoId: Number(this.formValues.value.ngo_id),
      donationType: this.formValues.value.donation_type,
      amount: this.formValues.value.amount,
      donationDate: this.formValues.value.donation_date,
    };
    this.api
      .putDonation(this.modelObj.donation_id, donationObj)
      .subscribe((res) => {
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValues.reset(); //reset the form
        this.getAllDonationData();
      });
  }
}
