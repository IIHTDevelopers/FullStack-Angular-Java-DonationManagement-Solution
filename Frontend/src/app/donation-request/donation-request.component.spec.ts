import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { FormBuilder,  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import{HttpTestingController} from '@angular/common/http/testing';
import { DonationRequestComponent } from './donation-request.component';
import { DonationRequestService } from './donation-request.service';
import { By } from '@angular/platform-browser';
// import { DonationRequestService } from 'src/app/SERVICES/donationrequest/donation-request.service';

describe('DonationRequestComponent',()=>{
  let serviceMock:any;
  let formBuilderMock:FormBuilder;
  let component: DonationRequestComponent;
  let fixture: ComponentFixture<DonationRequestComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [DonationRequestComponent],
      providers: [FormBuilder,DonationRequestService,HttpTestingController], //
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
     
    })
      .compileComponents();
  }));

  beforeEach(() => {
    serviceMock={
      postData:jest.fn(),
      };

    fixture = TestBed.createComponent(DonationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create Donation Request Component", () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });


  describe("business", ()=>{
    it("should create the Donation Component", () => {
      const fixt = new DonationRequestComponent(formBuilderMock,serviceMock);
      expect(fixt).toBeTruthy();
    });

    it('should declare obj refereces',()=>{
      expect(component.modelObj).toBeDefined();
      expect(component.formValues).toBeDefined();
      // expect(component.showAdd).toBeDefined();
    })

  });


  describe('boundary',()=>{
    
    it('Initialize the form',()=>{
      const formValues={
        amount:'',
        donar_id:'',  
        ngo_id:'',
        donation_end_date:'',
      };
      expect(component.formValues.value).toEqual(formValues);
    });

  });

  describe('exception',()=>{
  
        it('should invalidate the form when empty',()=>{
          component.formValues.controls['amount'].setValue('');
          component.formValues.controls['donar_id'].setValue('');
          component.formValues.controls['ngo_id'].setValue('');  
          component.formValues.controls['donation_end_date'].setValue('');
          expect(component.formValues.valid).toBeFalsy();
        });

        it('should validate the form ',()=>{
          component.formValues.controls['donar_id'].setValue('1');
          component.formValues.controls['ngo_id'].setValue('1');
          component.formValues.controls['amount'].setValue('5000');
          component.formValues.controls['donation_end_date'].setValue('19-05-2023');
          expect(component.formValues.valid).toBeTruthy();

        });

        it('donar_id field validity', () => {
          const c = component.formValues.controls['donar_id']
          expect(c.valid).toBeFalsy();      
          c.setValue('');
          expect(c.hasError('required')).toBeTruthy();      
        });

        
        it('ngo_id field validity', () => {
          const c = component.formValues.controls['ngo_id']
          expect(c.valid).toBeFalsy();      
          c.setValue('');
          expect(c.hasError('required')).toBeTruthy();      
        });

                 
        it('amount field validity', () => {
          const c = component.formValues.controls['amount']
          expect(c.valid).toBeFalsy();      
          c.setValue('');
          expect(c.hasError('required')).toBeTruthy();      
        });

        it('donation_end_date field validity', () => {
          const c = component.formValues.controls['donation_end_date']
          expect(c.valid).toBeFalsy();      
          c.setValue('');
          expect(c.hasError('required')).toBeTruthy();      
        });
   });


//   describe('business',()=>{

//     it('addDonation method to be defined',()=>{
//      component.addDonationReq=jest.fn();
//      expect(component.addDonationReq).toBeDefined();
//     });

//     it('postDonationData method to be defined',()=>{
//       component.postDonationReqData=jest.fn();
//       expect(component.postDonationReqData).toBeDefined();
//      });
    
//    });


// describe('business',()=>{
       
//   it('should call postDonationData', () => {
//     jest.spyOn(component, 'postDonationReqData');
//     component.postDonationReqData();  
//     expect(component.postDonationReqData).toHaveBeenCalled();
//   });

//   it('should call addDonation', () => {
//     jest.spyOn(component, 'addDonationReq');
//     component.addDonationReq();  
//     expect(component.addDonationReq).toHaveBeenCalled();
//   });
 
//   it('should not call addDonationReq', () => {
//     const can = jest.spyOn(component, 'addDonationReq');
//     expect(can).not.toHaveBeenCalled();
//   });

//   it('should not call postDonationData', () => {
//     const pnd = jest.spyOn(component, 'postDonationReqData');
//     expect(pnd).not.toHaveBeenCalled();
//   });

// });


// //Need to imporve test cases with return value
//   describe('business',()=>{


//       it('should post the Donation data',()=>{
//         // const data={ } //empty also works
//         const data={ 
//           amount:'7000',
//           donar_id:'1',
//           ngo_id:'1',         
//           donation_end_date:'19-05-2023',
//         }
//           const response={
//             success:true,
//             message:'Donation Request Created successfully'
//           };
//           const pd=jest.spyOn(serviceMock,'postData').mockReturnValue(response);
//           expect(serviceMock.postData(data)).toBe(response);
//           expect(pd).toHaveBeenCalledWith(data);
//           })

//           it("post Donation data with subscription", inject([HttpTestingController, DonationRequestService], (httpMock: HttpTestingController, dataService: DonationRequestService) => {
//             const data={ 
//               amount:'7000',
//               donar_id:'1',
//               ngo_id:'1',  
//               donation_end_date:'19-05-2023',
//         };      
//           dataService.postData(data).subscribe(data => {
//             expect(data).toEqual(data);
//             expect(data).toBe(data);
//             expect(data).not.toBe(null);
//             expect(null).toBeNull();
//             expect(data).toBeTruthy();
//           });
//       }));      
  
//   });

  describe('boundary',()=>{

    it("Test initial form fields",()=>{
      const form=component.formValues;
      const values={
        amount:'',
        donar_id:'',
        ngo_id:'',       
        donation_end_date:'',
      }
      expect(form.value).toEqual(values);
    })

    // it("donar_id should invalid when it has no value",()=>{
    //   //Arrange
    //   const t=component.formValues.get('donar_id');
    //   //Act
    //   t?.setValue(null);
    //   //Assert
    //   expect(t?.invalid).toBeTruthy();
    // })

    // it("donar_id should valid when it has value",()=>{
    //   const t=component.formValues.get('donar_id');
    //   t?.setValue('1');  
    //   expect(t?.valid).toBeTruthy();
    // })


    // it("ngo_id should invalid when it has no value",()=>{
    //   //Arrange
    //   const t=component.formValues.get('ngo_id');
    //   //Act
    //   t?.setValue(null);
    //   //Assert
    //   expect(t?.invalid).toBeTruthy();
    // })

    // it("ngo_id should valid when it has value",()=>{
    //   //Arrange
    //   const t=component.formValues.get('ngo_id');
    //   //Act
    //   t?.setValue('1');
    //   //Assert
    //   expect(t?.valid).toBeTruthy();
    // })


    // it("amount should invalid when it has no value",()=>{
    //   //Arrange
    //   const t=component.formValues.get('amount');
    //   //Act
    //   t?.setValue(null); 
    //   //Assert
    //   expect(t?.invalid).toBeTruthy();
    // })

    // it("amount should valid when it has value",()=>{
    //   //Arrange
    //   const t=component.formValues.get('amount');
    //   //Act
    //   t?.setValue('5000');
    //   //Assert
    //   expect(t?.valid).toBeTruthy();
    // })

    // it("donation_end_date should invalid when it has no value",()=>{
    //   //Arrange
    //   const t=component.formValues.get('donation_end_date');
    //   //Act
    //   t?.setValue(null); 
    //   //Assert
    //   expect(t?.invalid).toBeTruthy();
    // })

    // it("donation_end_date should valid when it has value",()=>{
    //   //Arrange
    //   const t=component.formValues.get('donation_end_date');
    //   //Act
    //   t?.setValue('19-05-2023');
    //   //Assert
    //   expect(t?.valid).toBeTruthy();
    // })
 
  })

 
  describe('boundary',()=>{ 

    it('testing formgroup and elemet count',()=>{
      const formElement=fixture.debugElement.nativeElement.querySelector('#formValues');
      const inputElements=formElement.querySelectorAll('input');
      expect(inputElements.length).toEqual(4);
    });

    // it('donar_id field validity', () => {
    //   const c = component.formValues.controls['donar_id'];
    //   expect(c.valid).toBeFalsy();  
    //   c.setValue('');
    //   expect(c.hasError('required')).toBeTruthy();  
    // });

    // it('ngo_id field validity', () => {
    //   const c = component.formValues.controls['ngo_id'];
    //   expect(c.valid).toBeFalsy();  
    //   c.setValue('');
    //   expect(c.hasError('required')).toBeTruthy();  
    // });

    // it('amount field validity', () => {
    //   const c = component.formValues.controls['amount'];
    //   expect(c.valid).toBeFalsy();  
    //   c.setValue('');
    //   expect(c.hasError('required')).toBeTruthy();  
    // });

    // it('donation_end_date field validity', () => {
    //   const c = component.formValues.controls['donation_end_date'];
    //   expect(c.valid).toBeFalsy();  
    //   c.setValue('');
    //   expect(c.hasError('required')).toBeTruthy();  
    // });

    //updated in db or not need to check
    // it('Testing whole form to be valid',()=>{
    //   const e1:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#formValues').querySelectorAll('input')[0];
    //   const e2:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#formValues').querySelectorAll('input')[1];
    //   const e3:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#formValues').querySelectorAll('input')[2];
    //   const e4:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#formValues').querySelectorAll('input')[3];
      
    //   e1.value='5000'; 
    //   e2.value='1';
    //   e3.value='1';   
    //   e4.value='19-05-2023'; 
      
    //   e1.dispatchEvent(new Event('input'));
    //   e2.dispatchEvent(new Event('input'));
    //   e3.dispatchEvent(new Event('input'));
    //   e4.dispatchEvent(new Event('input'));

    //   const isFormValid=component.formValues.valid;
    //   fixture.whenStable().then(()=>{
    //     expect(isFormValid).toBeTruthy();
    //   });  
    //});
  });


  // describe('Testing headings of the html table',()=>{

  //   it("should have heading-Create Donation Request", () => {
  //     const de = fixture.debugElement.query(By.css("h1"));
  //     const el = de.nativeElement;
  //     expect(el.textContent).toEqual("Create Donation Request");
  //   });
    
  // });

  // describe('Testing html buttons',()=>{
  //   it('update button testing', () => {
  //     const btn = fixture.debugElement.queryAll(By.css('#create'));
  //     expect(btn).toBeTruthy();
  //   }); 

  //   it('save button testing', () => {
  //     const btn = fixture.debugElement.queryAll(By.css('#save'));
  //     expect(btn).toBeTruthy();
  //   });

  //   it('cancel button testing', () => {
  //     const btn = fixture.debugElement.queryAll(By.css('#cancel'));
  //     expect(btn).toBeTruthy();
  //   });
      
  // })

});



// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { DonationRequestComponent } from './donation-request.component';

// describe('DonationRequestComponent', () => {
//   let component: DonationRequestComponent;
//   let fixture: ComponentFixture<DonationRequestComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DonationRequestComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(DonationRequestComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
