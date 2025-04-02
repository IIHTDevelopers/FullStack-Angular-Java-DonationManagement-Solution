import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { FormBuilder,  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import{HttpTestingController} from '@angular/common/http/testing';
import { NgoComponent } from './ngo.component';
import { NgoService } from './ngo.service';
import { By } from '@angular/platform-browser';
// import { NgoService } from 'src/app/SERVICES/ngo/ngo.service';

describe('NgoComponent',()=>{
  let serviceMock:any;
  let formBuilderMock:FormBuilder;
  let component: NgoComponent;
  let fixture: ComponentFixture<NgoComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgoComponent],
      providers: [FormBuilder,NgoService,HttpTestingController], 
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,        
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

    fixture = TestBed.createComponent(NgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create Donation Component", () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  describe("business", ()=>{
    it("should create the Dgo Component", () => {
      const fixt = new NgoComponent(formBuilderMock,serviceMock);
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
        ngo_name:'',  
        username:'',
        password:'',
        address:'',
        phone_number:'',
        started_in:'',
        documents:'',
      };
      expect(component.formValues.value).toEqual(formValues);
    });

  });
  
  describe('exception',()=>{
  
        it('should invalidate the form when empty',()=>{
          component.formValues.controls['ngo_name'].setValue('');      
          component.formValues.controls['username'].setValue('');
          component.formValues.controls['password'].setValue('');     
          component.formValues.controls['address'].setValue('');
          component.formValues.controls['phone_number'].setValue('');
          component.formValues.controls['started_in'].setValue('');
          component.formValues.controls['documents'].setValue('');
          expect(component.formValues.valid).toBeFalsy();
        });

        it('should validate the form ',()=>{
          component.formValues.controls['ngo_name'].setValue('ngo1');       
          component.formValues.controls['username'].setValue('user1');
          component.formValues.controls['password'].setValue('user123');  
          component.formValues.controls['address'].setValue('Hyd');
          component.formValues.controls['phone_number'].setValue('9052023671');
          component.formValues.controls['started_in'].setValue('19-05-2023');
          component.formValues.controls['documents'].setValue('sample docs');
          expect(component.formValues.valid).toBeTruthy();
        });

        it('ngo_name field validity', () => {
          const c = component.formValues.controls['ngo_name']
          expect(c.valid).toBeFalsy();      
          c.setValue('');
          expect(c.hasError('required')).toBeTruthy();      
        });
        
        it('documents field validity', () => {
          const c = component.formValues.controls['documents']
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
        
        it('started_in field validity', () => {
          const c = component.formValues.controls['started_in']
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

//     it('addNgo method to be defined',()=>{
//      component.addNgo=jest.fn();
//      expect(component.addNgo).toBeDefined();
//     });

//     it('postNgoData method to be defined',()=>{
//       component.postNgoData=jest.fn();
//       expect(component.postNgoData).toBeDefined();
//      });

//      it('getAllNgoData method to be defined',()=>{
//       component.getAllNgoData=jest.fn();
//       expect(component.getAllNgoData).toBeDefined();
//      });

//      it('deleteNgo method to be defined',()=>{
//       component.deleteNgo=jest.fn();
//       expect(component.deleteNgo).toBeDefined();
//      });
    
//      it('NgoEdit method to be defined',()=>{
//       component.ngoEdit=jest.fn();
//       expect(component.ngoEdit).toBeDefined();
//      });
//      it('updateNgoData method to be defined',()=>{
//       component.updateNgoData=jest.fn();
//       expect(component.updateNgoData).toBeDefined();
//      });
    
// });

// describe('business',()=>{
       
//   it('should call postNgoData', () => {
//     jest.spyOn(component, 'postNgoData');
//     component.postNgoData();  
//     expect(component.postNgoData).toHaveBeenCalled();
//   });

//   it('should call updateNgoData', () => {
//     jest.spyOn(component, 'updateNgoData');
//     component.updateNgoData();  
//     expect(component.updateNgoData).toHaveBeenCalled();

//   });  

//   it('should call addNgo', () => {
//     jest.spyOn(component, 'addNgo');
//     component.addNgo();  
//     expect(component.addNgo).toHaveBeenCalled();
//   });
 
//   it('should call deleteNgo', () => {
//     jest.spyOn(component, 'deleteNgo');
//     component.deleteNgo(1);    
//     expect(component.deleteNgo).toHaveBeenCalled();
//   });

//   it('should not call addDNgo', () => {
//     const can = jest.spyOn(component, 'addNgo');
//     expect(can).not.toHaveBeenCalled();
//   });

//   it('should not call getAllNgoData', () => {
//     const gan = jest.spyOn(component, 'getAllNgoData');
//     expect(gan).not.toHaveBeenCalled();
//   });

//   it('should not call postNgoData', () => {
//     const pnd = jest.spyOn(component, 'postNgoData');
//     expect(pnd).not.toHaveBeenCalled();
//   });

//   it('should not call deleteNgo', () => {
//     const dnd = jest.spyOn(component, 'deleteNgo');
//     expect(dnd).not.toHaveBeenCalled();
//   });

//   it('should not call NgoEdit', () => {
//     const ne = jest.spyOn(component, 'ngoEdit');
//     expect(ne).not.toHaveBeenCalled();
//   });

//   it('should not call updateNgoData', () => {
//     const und = jest.spyOn(component, 'updateNgoData');
//     expect(und).not.toHaveBeenCalled();
//   });

// });

//Need to imporve test cases with return value
  // describe('business',()=>{

  //   it('should get the Ngo data',()=>{
  //     const response={
  //       success:true,
  //       message:'Ngo Data fetched successfully',
        
  //     };
  //     const result={};
  //     const gd=jest.spyOn(serviceMock,'getData').mockReturnValue(response);
  //     expect(serviceMock.getData()).toBe(response);
  //     expect(gd).toHaveBeenCalled();// returned value need to check
  //     })

      // it('should post the Ngo data',()=>{
      //   // const data={ } //empty also works
      //   const data={ 
      //     ngo_name:'ngo1',         
      //     username:'donro1',
      //     password:'pwd',         
      //     address:'hyd',
      //     phone_number:'9658589658',
      //     started_in:'19-05-2023',
      //     documents:'sample docs',          
      //   }
      //     const response={
      //       success:true,
      //       message:'Ngo Created successfully'
      //     };
      //     const pd=jest.spyOn(serviceMock,'postData').mockReturnValue(response);
      //     expect(serviceMock.postData(data)).toBe(response);
      //     expect(pd).toHaveBeenCalledWith(data);
      //     })

        //   it("post Ngo data with subscription", inject([HttpTestingController, NgoService], (httpMock: HttpTestingController, dataService: NgoService) => {
        //     const data={ 
        //       ngo_name:'ngo1',         
        //       username:'donro1',
        //       password:'pwd',         
        //       address:'hyd',
        //       phone_number:'9658589658',
        //       started_in:'19-05-2023',
        //       documents:'sample docs', 
        // };      
        //   dataService.postData(data).subscribe(data => {
        //     expect(data).toEqual(data);
        //     expect(data).toBe(data);
        //     expect(data).not.toBe(null);
        //     expect(null).toBeNull();
        //     expect(data).toBeTruthy();
        //   });
     // }));      

      // it('should edit the Ngo data of specified id',()=>{
      // const data={ }
      //   const response={
      //     success:true,
      //     message:'Ngo updated successfully'
      //   };
      //   const pd=jest.spyOn(serviceMock,'patchData').mockReturnValue(response);
      //   expect(serviceMock.patchData(1,data)).toBe(response);
      //   expect(pd).toHaveBeenCalledWith(1,data);
      //   })

      //   it('should delete the Ngo of specified id',()=>{
      //       const response={
      //         success:true,
      //         message:'Ngo deleted successfully'
      //       };
      //       const dd=jest.spyOn(serviceMock,'deleteData').mockReturnValue(response);
      //       expect(serviceMock.deleteData(1)).toBe(response);
      //       expect(dd).toHaveBeenCalledWith(1);
      //       })

 // });


  describe('boundary',()=>{

    it("Test initial form fields",()=>{
      const form=component.formValues;
      const values={
        ngo_name:'', 
        username:'',
        password:'',        
        address:'',
        phone_number:'', 
        started_in:'',
        documents:'', 
      }
      expect(form.value).toEqual(values);
    })

  //   it(" documents should invalid when it has no value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('documents');
  //     //Act
  //     t?.setValue(null);
  //     //Assert
  //     expect(t?.invalid).toBeTruthy();
  //   })

  //   it(" documents should valid when it has value",()=>{
  //     const t=component.formValues.get('documents');
  //     t?.setValue('sample docs');  
  //     expect(t?.valid).toBeTruthy();
  //   })

  //   it("ngo_name should invalid when it has no value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('ngo_name');
  //     //Act
  //     t?.setValue(null);
  //     //Assert
  //     expect(t?.invalid).toBeTruthy();
  //   })

  //   it("ngo_name should valid when it has value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('ngo_name');
  //     //Act
  //     t?.setValue('ngo1');
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
    
  //  it("started_in should invalid when it has no value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('started_in');
  //     //Act
  //     t?.setValue(null); 
  //     //Assert
  //     expect(t?.invalid).toBeTruthy();
  //   })

  //   it("started_in should valid when it has value",()=>{
  //     //Arrange
  //     const t=component.formValues.get('started_in');
  //     //Act
  //     t?.setValue('11-03-2023');
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

    // it('documents field validity', () => {
    //   const c = component.formValues.controls['documents'];
    //   expect(c.valid).toBeFalsy();  
    //   c.setValue('');
    //   expect(c.hasError('required')).toBeTruthy();  
    // });

    // it('ngo_name field validity', () => {
    //   const c = component.formValues.controls['ngo_name'];
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

    // it('started_in field validity', () => {
    //   const c = component.formValues.controls['started_in'];
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

    //   e1.value='ngo1';
    //   e2.value='donor1';
    //   e3.value='pwd1';
    //   e4.value='hyd'; 
    //   e5.value='9052023562';
    //   e6.value='19-05-2023'; 
    //   e7.value='sample docs'; 
      
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

  // describe('Testing headings of the html table',()=>{

  //   it("should have heading-Ngo Details", () => {
  //     const de = fixture.debugElement.query(By.css("h1"));
  //     const el = de.nativeElement;
  //     expect(el.textContent).toEqual("Ngo Details");
  //   });
    
  //   it("should have table header Ngo Id ", () => {  
  //     const de = fixture.debugElement.query(By.css(".c0"));
  //     const el = de.nativeElement;
  //     expect(el.textContent).toEqual("Ngo Id");
  //   });

  //   it("should have table header Ngo Name ", () => {  
  //     const de = fixture.debugElement.query(By.css(".c1"));
  //     const el = de.nativeElement;
  //     expect(el.textContent).toEqual("Ngo Name");
  //   });
    
  //   it("should have table header User Name ", () => {  
  //     const de = fixture.debugElement.query(By.css(".c2"));
  //     const el = de.nativeElement;
  //     expect(el.textContent).toEqual("User Name");
  //   });

  //   it("should have table header Password ", () => {
  //     const de = fixture.debugElement.query(By.css(".c3"));
  //     const el = de.nativeElement;
  //     expect(el.textContent).toEqual("Password");
  //   });

  //   it("should have table header Address", () => { 
  //     const de = fixture.debugElement.query(By.css(".c4"));
  //     const el = de.nativeElement;
  //     expect(el.textContent).toEqual("Address");
  //   });

  //   it("should have table header Documents", () => {
  //     const de = fixture.debugElement.query(By.css(".c5"));
  //     const el = de.nativeElement;
  //     expect(el.textContent).toEqual("Documents");
  //   });

  //   it("should have table header Phone Number", () => {
  //     //fixture.detectChanges();
  //     const de = fixture.debugElement.query(By.css(".c6"));
  //     const el = de.nativeElement;
  //     expect(el.textContent).toEqual("Phone Number");
  //   });

  //   it("should have table header Started Date", () => {
  //     const de = fixture.debugElement.query(By.css(".c7"));
  //     const el = de.nativeElement;
  //     expect(el.textContent).toEqual("Started Date");
  //   });
 
  //   it("should test number of headings of the table ", () => {
  //     const table=['Ngo Id','Ngo Name','User Name','Password','Address','Documents','Phone Number','Started Date']
  //     expect(table.length).toEqual(8);
  //   });  

  // });

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

// import { NgoComponent } from './ngo.component';

// describe('NgoComponent', () => {
//   let component: NgoComponent;
//   let fixture: ComponentFixture<NgoComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ NgoComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(NgoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
