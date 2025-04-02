import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { DonationRequest } from './donation-request';
import { DonationRequestService } from './donation-request.service';
// import { DonationRequestService } from 'src/app/SERVICES/donationrequest/donation-request.service';
// import { DonationRequest } from 'src/app/MODELS/donationrequest/donation-request';

@Component({
  selector: 'app-donation-request',
  templateUrl: './donation-request.component.html',
  styleUrls: ['./donation-request.component.css']
})

export class DonationRequestComponent implements OnInit {
  formValues!:FormGroup;
  modelObj:DonationRequest=new DonationRequest();
  allData:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  constructor(private fB:FormBuilder,private api:DonationRequestService) { }

  ngOnInit(): void {
    this.formValues=this.fB.group({
    amount:['',Validators.required],
    donar_id:['',Validators.required],   
    ngo_id:['',Validators.required],    
    donation_end_date:['',Validators.required],
    })
  }


get amount(){
    return this.formValues.get('amount')
  }
get donar_id(){
  return this.formValues.get('donar_id')
}
get ngo_id(){
  return this.formValues.get('ngo_id')
}
get donation_end_date(){
  return this.formValues.get('donation_end_date')
}

//calls when you click on Add  button
addDonationReq(){
  this.formValues.reset();//reset the form
  this.showAdd=true;
  this.showUpdate=false;
}

//Save Data
  postDonationReqData(){
    this.modelObj.amount=this.formValues.value.amount;
    this.modelObj.donar_id=this.formValues.value.donar_id;
    this.modelObj.ngo_id=this.formValues.value.ngo_id;  
    this.modelObj.donation_end_date=this.formValues.value.donation_end_date;   
    this.api.postData(this.modelObj)
    .subscribe(res=>{  
     // alert("Saved Successfully");
      let ref=document.getElementById('cancel');
      ref?.click();
      this.formValues.reset(); //reset the form
      //this.getAllDonationReqData();
    }
    // ,
    // err=>{
    //   alert("Something went wrong");
    // }
    )
  }

//Get data

// getAllDonationReqData(){
//     this.api.getData()
//     .subscribe(res=>{
//       this.allData=res;
//     })
//   }

}
