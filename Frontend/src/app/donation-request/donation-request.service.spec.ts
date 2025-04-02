import { of } from 'rxjs';
import { DonationRequestService } from './donation-request.service';

describe('DonationRequestService', () => {
  let service:DonationRequestService
  let httpClientSpy:any;

  beforeEach(() => {  
    httpClientSpy={  
      post:jest.fn(),
    }
  service=new DonationRequestService(httpClientSpy); 
    
  });

  it('Donation Requests hould be created', () => {
    expect(service).toBeTruthy();
  });

  it('testing postData',()=>{
    const data={   
      ngo_id:1,
      ngo_name:'ngo1',
      username:'user1',
      password:'pwd',
      address:'Hyd',
      phone_number:968569856,
      started_in:'18-05-2023',
      documents:'sample docs'    
    }
    const res="some message";
    const url='http://127.0.0.1:8000/donation_request/';
    jest.spyOn(httpClientSpy,'post').mockReturnValue(of(res));
    service.postData(data);
    expect(httpClientSpy.post).toBeCalledTimes(1);
    //expect(httpClientSpy.post).toHaveBeenCalledWith(url);
  })
  
});




// import { TestBed } from '@angular/core/testing';

// import { DonationService } from './donation.service';

// describe('DonationService', () => {
//   let service: DonationService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(DonationService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });



// import { TestBed } from '@angular/core/testing';

// import { NgoService } from './ngo.service';

// describe('NgoService', () => {
//   let service: NgoService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(NgoService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });




// import { TestBed } from '@angular/core/testing';

// import { DonationRequestService } from './donation-request.service';

// describe('DonationRequestService', () => {
//   let service: DonationRequestService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(DonationRequestService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
