import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { FormBuilder,  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import{HttpTestingController} from '@angular/common/http/testing';
import { DonorComponent } from './donor.component';
import { DonorService } from './donor.service';
import { By } from '@angular/platform-browser';
// import { DonorService } from 'src/app/SERVICES/donar/donor.service';

describe('DonarComponent',()=>{
  let serviceMock:any;
  let formBuilderMock:FormBuilder;
  let component: DonorComponent;
  let fixture: ComponentFixture<DonorComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DonorComponent],
      providers: [FormBuilder,DonorService,HttpTestingController],
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
      getData:jest.fn(),
      postData:jest.fn(),
      patchData:jest.fn(),
      deleteData:jest.fn(),
      };
    fixture = TestBed.createComponent(DonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create Donation Component", () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  describe("business", ()=>{
    it("should create the Donation Component", () => {
      const fixt = new DonorComponent(formBuilderMock,serviceMock);
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
        ngo_id:'',   
        donar_name:'',
        username:'',
        password:'',
        email_id:'',
        address:'',
        phone_number:'',
      };
      expect(component.formValues.value).toEqual(formValues);
    });

  });
  
  describe('exception',()=>{
  
        it('should invalidate the form when empty',()=>{
          component.formValues.controls['ngo_id'].setValue('');
          component.formValues.controls['donar_name'].setValue('');
          component.formValues.controls['username'].setValue('');
          component.formValues.controls['password'].setValue('');
          component.formValues.controls['email_id'].setValue('');
          component.formValues.controls['address'].setValue('');
          component.formValues.controls['phone_number'].setValue('');
          expect(component.formValues.valid).toBeFalsy();
        });

        it('should validate the form ',()=>{
          component.formValues.controls['ngo_id'].setValue('1');
          component.formValues.controls['donar_name'].setValue('donar1');
          component.formValues.controls['username'].setValue('user1');
          component.formValues.controls['password'].setValue('user123');
          component.formValues.controls['email_id'].setValue('abc@gmail.com');
          component.formValues.controls['address'].setValue('Hyd');
          component.formValues.controls['phone_number'].setValue('9052023671');
          expect(component.formValues.valid).toBeTruthy();
        });

        it('ngo_id field validity', () => {
          const c = component.formValues.controls['ngo_id']
          expect(c.valid).toBeFalsy();      
          c.setValue('');
          expect(c.hasError('required')).toBeTruthy();      
        });
        
        it('donar_name field validity', () => {
          const c = component.formValues.controls['donar_name']
          expect(c.valid).toBeFalsy();      
          c.setValue('');
          expect(c.hasError('required')).toBeTruthy();      
        });

        
        it('username field validity', () => {
          const c = component.formValues.controls['username']
          expect(c.valid).toBeFalsy();      
          c.setValue('');
          expect(c.hasError('required')).toBeTruthy();      
        });

        
        it('password field validity', () => {
          const c = component.formValues.controls['password']
          expect(c.valid).toBeFalsy();      
          c.setValue('');
          expect(c.hasError('required')).toBeTruthy();      
        });
        
        it('email_id field validity', () => {
          const c = component.formValues.controls['email_id']
          expect(c.valid).toBeFalsy();      
          c.setValue('');
          expect(c.hasError('required')).toBeTruthy();      
        });

        it('address field validity', () => {
          const c = component.formValues.controls['address']
          expect(c.valid).toBeFalsy();      
          c.setValue('');
          expect(c.hasError('required')).toBeTruthy();      
        });

        it('phone_number field validity', () => {
          const c = component.formValues.controls['phone_number']
          expect(c.valid).toBeFalsy();      
          c.setValue('');
          expect(c.hasError('required')).toBeTruthy();      
        });

   });


//   describe('business',()=>{

//     it('addDonor method to be defined',()=>{
//      component.addDonor=jest.fn();
//      expect(component.addDonor).toBeDefined();
//     });

//     it('postDonorData method to be defined',()=>{
//       component.postDonorData=jest.fn();
//       expect(component.postDonorData).toBeDefined();
//      });

//      it('getAllDonorData method to be defined',()=>{
//       component.getAllDonorData=jest.fn();
//       expect(component.getAllDonorData).toBeDefined();
//      });

//      it('deleteDonor method to be defined',()=>{
//       component.deleteDonor=jest.fn();
//       expect(component.deleteDonor).toBeDefined();
//      });
    
//      it('donorEdit method to be defined',()=>{
//       component.donorEdit=jest.fn();
//       expect(component.donorEdit).toBeDefined();
//      });
//      it('updateDonorData method to be defined',()=>{
//       component.updateDonorData=jest.fn();
//       expect(component.updateDonorData).toBeDefined();
//      });
    
// });



// describe('business',()=>{
       
//   it('should call postDonorData', () => {
//     jest.spyOn(component, 'postDonorData');
//     component.postDonorData();  
//     expect(component.postDonorData).toHaveBeenCalled();
//   });

//   it('should call updateDonorData', () => {
//     jest.spyOn(component, 'updateDonorData');
//     component.updateDonorData();  
//     expect(component.updateDonorData).toHaveBeenCalled();

//   });
  

//   it('should call addDonor', () => {
//     jest.spyOn(component, 'addDonor');
//     component.addDonor();  
//     expect(component.addDonor).toHaveBeenCalled();
//   });

 
//   it('should call deleteDonor', () => {
//     jest.spyOn(component, 'deleteDonor');
//     component.deleteDonor(1);    
//     expect(component.deleteDonor).toHaveBeenCalled();
//   });

//   it('should not call addDDonor', () => {
//     const can = jest.spyOn(component, 'addDonor');
//     expect(can).not.toHaveBeenCalled();
//   });

//   it('should not call getAllDonorData', () => {
//     const gan = jest.spyOn(component, 'getAllDonorData');
//     expect(gan).not.toHaveBeenCalled();
//   });

//   it('should not call postDonorData', () => {
//     const pnd = jest.spyOn(component, 'postDonorData');
//     expect(pnd).not.toHaveBeenCalled();
//   });

//   it('should not call deleteDonor', () => {
//     const dnd = jest.spyOn(component, 'deleteDonor');
//     expect(dnd).not.toHaveBeenCalled();
//   });

//   it('should not call donorEdit', () => {
//     const ne = jest.spyOn(component, 'donorEdit');
//     expect(ne).not.toHaveBeenCalled();
//   });

//   it('should not call updateDonorData', () => {
//     const und = jest.spyOn(component, 'updateDonorData');
//     expect(und).not.toHaveBeenCalled();
//   });

// });


// //Need to imporve test cases with return value
//   describe('business',()=>{

//     it('should get the Donor data',()=>{
//       const response={
//         success:true,
//         message:'Donor Data fetched successfully',
        
//       };
//       const result={};
//       const gd=jest.spyOn(serviceMock,'getData').mockReturnValue(response);
//       expect(serviceMock.getData()).toBe(response);
//       expect(gd).toHaveBeenCalled();// returned value need to check
//       })

//       it('should post the Donor data',()=>{
//         // const data={ } //empty also works
//         const data={ 
//           ngo_id:'1',   
//           donar_name:'donro1',
//           username:'donro1',
//           password:'pwd',
//           email_id:'abc@gmail.com',
//           address:'hyd',
//           phone_number:'9658589658',
          
//         }
//           const response={
//             success:true,
//             message:'Donor Created successfully'
//           };
//           const pd=jest.spyOn(serviceMock,'postData').mockReturnValue(response);
//           expect(serviceMock.postData(data)).toBe(response);
//           expect(pd).toHaveBeenCalledWith(data);
//           })

//           it("post Donor data with subscription", inject([HttpTestingController, DonorService], (httpMock: HttpTestingController, dataService: DonorService) => {
//             const data={ 
//               ngo_id:'1',   
//               donar_name:'donro1',
//               username:'donro1',
//               password:'pwd',
//               email_id:'abc@gmail.com',
//               address:'hyd',
//               phone_number:'9658589658',
//         };      
//           dataService.postData(data).subscribe(data => {
//             expect(data).toEqual(data);
//             expect(data).toBe(data);
//             expect(data).not.toBe(null);
//             expect(null).toBeNull();
//             expect(data).toBeTruthy();
//           });
//       }));      


//       it('should edit the donor data of specified id',()=>{
//       const data={ }
//         const response={
//           success:true,
//           message:'Donor updated successfully'
//         };
//         const pd=jest.spyOn(serviceMock,'patchData').mockReturnValue(response);
//         expect(serviceMock.patchData(1,data)).toBe(response);
//         expect(pd).toHaveBeenCalledWith(1,data);
//         })

//         it('should delete the Donor of specified id',()=>{
//           // const note={ 
//           //   id:101,}
//             const response={
//               success:true,
//               message:'Donor deleted successfully'
//             };
//             const dd=jest.spyOn(serviceMock,'deleteData').mockReturnValue(response);
//             expect(serviceMock.deleteData(1)).toBe(response);
//             expect(dd).toHaveBeenCalledWith(1);
//             })

//   });

  describe('boundary',()=>{

    it("Test initial form fields",()=>{
      const form=component.formValues;
      const values={
        ngo_id:'',   
        donar_name:'',
        username:'',
        password:'',
        email_id:'',
        address:'',
        phone_number:'',  
      }
      expect(form.value).toEqual(values);
    })

  //   it("donar_name should invalid when it has no value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('donar_name');
  //     //Act
  //     t?.setValue(null);
  //     //Assert
  //     expect(t?.invalid).toBeTruthy();
  //   })

  //   it("donar_name should valid when it has value",()=>{
  //     const t=component.formValues.get('donar_name');
  //     t?.setValue('1');  
  //     expect(t?.valid).toBeTruthy();
  //   })

  //   it("ngo_id should invalid when it has no value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('ngo_id');
  //     //Act
  //     t?.setValue(null);
  //     //Assert
  //     expect(t?.invalid).toBeTruthy();
  //   })

  //   it("ngo_id should valid when it has value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('ngo_id');
  //     //Act
  //     t?.setValue('1');
  //     //Assert
  //     expect(t?.valid).toBeTruthy();
  //   })


  //   it("username should invalid when it has no value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('username');
  //     //Act
  //     t?.setValue(null);
  //     //Assert
  //     expect(t?.invalid).toBeTruthy();
  //   })

  //   it("username should valid when it has value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('username');
  //     //Act
  //     t?.setValue('user1');
  //     //Assert
  //     expect(t?.valid).toBeTruthy();
  //   })

  //   it("password should invalid when it has no value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('password');
  //     //Act
  //     t?.setValue(null); 
  //     //Assert
  //     expect(t?.invalid).toBeTruthy();
  //   })

  //   it("password should valid when it has value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('password');
  //     //Act
  //     t?.setValue('11100');
  //     //Assert
  //     expect(t?.valid).toBeTruthy();
  //   })
    
  //  it("email_id should invalid when it has no value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('email_id');
  //     //Act
  //     t?.setValue(null); 
  //     //Assert
  //     expect(t?.invalid).toBeTruthy();
  //   })

  //   it("email_id should valid when it has value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('email_id');
  //     //Act
  //     t?.setValue('11100');
  //     //Assert
  //     expect(t?.valid).toBeTruthy();
  //   })

  //   it("address should invalid when it has no value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('address');
  //     //Act
  //     t?.setValue(null); 
  //     //Assert
  //     expect(t?.invalid).toBeTruthy();
  //   })

  //   it("address should valid when it has value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('address');
  //     //Act
  //     t?.setValue('Hyd');
  //     //Assert
  //     expect(t?.valid).toBeTruthy();
  //   })

  //   it("phone_number should invalid when it has no value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('phone_number');
  //     //Act
  //     t?.setValue(null); 
  //     //Assert
  //     expect(t?.invalid).toBeTruthy();
  //   })

  //   it("phone_number should valid when it has value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('phone_number');
  //     //Act
  //     t?.setValue('905420232');
  //     //Assert
  //     expect(t?.valid).toBeTruthy();
  //   })
 
  })
 
  describe('boundary',()=>{ 

    it('testing formgroup and elemet count',()=>{
      const formElement=fixture.debugElement.nativeElement.querySelector('#formValues');
      const inputElements=formElement.querySelectorAll('input');
      expect(inputElements.length).toEqual(7);
    });

    // it('donar_name field validity', () => {
    //   const c = component.formValues.controls['donar_name'];
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

  
    // it('username field validity', () => {
    //   const c = component.formValues.controls['username'];
    //   expect(c.valid).toBeFalsy();  
    //   c.setValue('');
    //   expect(c.hasError('required')).toBeTruthy();  
    // });

    // it('password field validity', () => {
    //   const c = component.formValues.controls['password'];
    //   expect(c.valid).toBeFalsy();  
    //   c.setValue('');
    //   expect(c.hasError('required')).toBeTruthy();  
    // });

    // it('email_id field validity', () => {
    //   const c = component.formValues.controls['email_id'];
    //   expect(c.valid).toBeFalsy();  
    //   c.setValue('');
    //   expect(c.hasError('required')).toBeTruthy();  
    // });

    // it('address field validity', () => {
    //   const c = component.formValues.controls['address'];
    //   expect(c.valid).toBeFalsy();  
    //   c.setValue('');
    //   expect(c.hasError('required')).toBeTruthy();  
    // });

    // it('phone_number field validity', () => {
    //   const c = component.formValues.controls['phone_number'];
    //   expect(c.valid).toBeFalsy();  
    //   c.setValue('');
    //   expect(c.hasError('required')).toBeTruthy();  
    // });


    // //updated in db or not need to check
    // it('Testing whole form to be valid',()=>{
    //   const e1:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#formValues').querySelectorAll('input')[0];
    //   const e2:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#formValues').querySelectorAll('input')[1];
    //   const e3:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#formValues').querySelectorAll('input')[2];
    //   const e4:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#formValues').querySelectorAll('input')[3];
    //   const e5:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#formValues').querySelectorAll('input')[4];
    //   const e6:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#formValues').querySelectorAll('input')[4];
    //   const e7:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#formValues').querySelectorAll('input')[4];

    //   e1.value='1';
    //   e2.value='donor1';
    //   e3.value='user1';
    //   e4.value='pwd1'; 
    //   e5.value='abc@gmail.com';
    //   e6.value='Hyd'; 
    //   e7.value='9052023562'; 
      
    //   e1.dispatchEvent(new Event('input'));
    //   e2.dispatchEvent(new Event('input'));
    //   e3.dispatchEvent(new Event('input'));
    //   e4.dispatchEvent(new Event('input'));
    //   e5.dispatchEvent(new Event('input'));
    //   e6.dispatchEvent(new Event('input'));
    //   e7.dispatchEvent(new Event('input'));

    //   const isFormValid=component.formValues.valid;
    //   fixture.whenStable().then(()=>{
    //     expect(isFormValid).toBeTruthy();
    //   });  
    // });
  });


  //describe('Testing headings of the html table',()=>{

    // it("should have heading-Donar Details", () => {
    //   const de = fixture.debugElement.query(By.css("h1"));
    //   const el = de.nativeElement;
    //   expect(el.textContent).toEqual("Donar Details");
    // });
    
    // it("should have table header Donar ID ", () => {  
    //   const de = fixture.debugElement.query(By.css(".c1"));
    //   const el = de.nativeElement;
    //   expect(el.textContent).toEqual("Donar Id");
    // });
    
    // it("should have table header Ngo Id ", () => {  
    //   const de = fixture.debugElement.query(By.css(".c2"));
    //   const el = de.nativeElement;
    //   expect(el.textContent).toEqual("Ngo Id");
    // });

    // it("should have table header Donar Name ", () => {
    //   const de = fixture.debugElement.query(By.css(".c3"));
    //   const el = de.nativeElement;
    //   expect(el.textContent).toEqual("Donar Name");
    // });


    // it("should have table header User Name", () => { 
    //   const de = fixture.debugElement.query(By.css(".c4"));
    //   const el = de.nativeElement;
    //   expect(el.textContent).toEqual("User Name");
    // });

    // it("should have table header Password", () => {
    //   const de = fixture.debugElement.query(By.css(".c5"));
    //   const el = de.nativeElement;
    //   expect(el.textContent).toEqual("Password");
    // });

    // it("should have table header Email Id ", () => {
    //   //fixture.detectChanges();
    //   const de = fixture.debugElement.query(By.css(".c6"));
    //   const el = de.nativeElement;
    //   expect(el.textContent).toEqual("Email Id");
    // });

    // it("should have table header Phone Number", () => {
    //   const de = fixture.debugElement.query(By.css(".c7"));
    //   const el = de.nativeElement;
    //   expect(el.textContent).toEqual("Phone Number");
    // });

    // it("should have table header Address", () => {
    //   //fixture.detectChanges();
    //   const de = fixture.debugElement.query(By.css(".c8"));
    //   const el = de.nativeElement;
    //   expect(el.textContent).toEqual("Address");
    // });


    // it("should test number of headings of the table ", () => {
    //   const table=['donar_id','ngo_id','donar_name','username','password','email_id','address','phone_number']
    //   expect(table.length).toEqual(8);
    // });  

  //});

 
  // describe('Testing html buttons',()=>{
  //   it('save button testing', () => {
  //     const btn = fixture.debugElement.queryAll(By.css('#save'));
  //     expect(btn).toBeTruthy();
  //   });

  //   it('cancel button testing', () => {
  //     const btn = fixture.debugElement.queryAll(By.css('#cancel'));
  //     expect(btn).toBeTruthy();
  //   });

  //   it('update button testing', () => {
  //     const btn = fixture.debugElement.queryAll(By.css('#update'));
  //     expect(btn).toBeTruthy();
  //   });
    
  //   it('delete button testing', () => {
  //     const btn = fixture.debugElement.queryAll(By.css('#delete'));
  //     expect(btn).toBeTruthy();
  //   });

  //   it('edit button testing', () => {
  //     const btn = fixture.debugElement.queryAll(By.css('#edit'));
  //     expect(btn).toBeTruthy();
  //   });

  // })

});




// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { DonorComponent } from './donor.component';

// describe('DonorComponent', () => {
//   let component: DonorComponent;
//   let fixture: ComponentFixture<DonorComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DonorComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(DonorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
