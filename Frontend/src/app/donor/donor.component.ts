import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Donor } from './donor';
import { DonorService } from './donor.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css'],
})
export class DonorComponent implements OnInit {
  formValues!: FormGroup;
  modelObj: Donor = new Donor();
  allData: Donor[] = [];
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private fB: FormBuilder, private api: DonorService) {}

  ngOnInit(): void {
    this.formValues = this.fB.group({
      ngo_id: ['', Validators.required],
      donar_name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      phone_number: ['', Validators.required],
      email_id: ['', Validators.required],
    });
    this.getAllDonorData();
  }

  get ngo_id() {
    return this.formValues.get('ngo_id');
  }
  get donar_name() {
    return this.formValues.get('donar_name');
  }

  get username() {
    return this.formValues.get('username');
  }
  get password() {
    return this.formValues.get('password');
  }
  get address() {
    return this.formValues.get('address');
  }
  get phone_number() {
    return this.formValues.get('phone_number');
  }
  get email_id() {
    return this.formValues.get('email_id');
  }

  //calls when you click on Add  button
  addDonor() {
    this.formValues.reset(); //reset the form
    this.showAdd = true;
    this.showUpdate = false;
  }

  //Save Data

  postDonorData() {
    const donarObj = {
      ngoId: this.formValues.value.ngo_id,
      donarName: this.formValues.value.donar_name,
      username: this.formValues.value.username,
      password: this.formValues.value.password,
      emailId: this.formValues.value.email_id,
      phoneNumber: this.formValues.value.phone_number,
      address: this.formValues.value.address,
    };

    this.api.postData(donarObj).subscribe((res) => {
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValues.reset(); //reset the form
      this.getAllDonorData();
    });
  }

  //Get data
  getAllDonorData() {
    this.api.getData().subscribe((res) => {
      let arr: Donor[] = [];
      res.forEach(
        (dn: {
          donarId: number;
          ngoId: number;
          donarName: string;
          username: string;
          password: string;
          emailId: string;
          phoneNumber: number;
          address: string;
        }) => {
          const donor = new Donor();
          donor.donar_id = dn.donarId;
          donor.ngo_id = dn.ngoId;
          donor.donar_name = dn.donarName;
          donor.username = dn.username;
          donor.password = dn.password;
          donor.email_id = dn.emailId;
          donor.phone_number = dn.phoneNumber;
          donor.address = dn.address;
          arr.push(donor);
        }
      );
      this.allData = arr;
    });
  }

  //Delete data
  deleteDonor(obj: any) {
    this.api.deleteData(obj.donar_id).subscribe((res) => {
      this.getAllDonorData();
    });
  }

  // set values of specfid one to html form fields to edit
  donorEdit(obj: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.modelObj.donar_id = obj.donar_id;
    this.formValues.controls['ngo_id'].setValue(obj.ngo_id);
    this.formValues.controls['donar_name'].setValue(obj.donar_name);
    this.formValues.controls['username'].setValue(obj.username);
    this.formValues.controls['password'].setValue(obj.password);
    this.formValues.controls['address'].setValue(obj.address);
    this.formValues.controls['phone_number'].setValue(obj.phone_number);
    this.formValues.controls['email_id'].setValue(obj.email_id);
  }

  //Update data
  updateDonorData() {
    const donorObj = {
      donarId: Number(this.modelObj.donar_id),
      ngoId: Number(this.formValues.value.ngo_id),
      donarName: this.formValues.value.donar_name,
      username: this.formValues.value.username,
      password: this.formValues.value.password,
      emailId: this.formValues.value.email_id,
      phoneNumber: this.formValues.value.phone_number,
      address: this.formValues.value.address,
    };
    this.api.putData(donorObj.donarId, donorObj).subscribe((res) => {
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValues.reset(); //reset the form
      this.getAllDonorData();
    });
  }
}
