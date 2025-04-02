import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { DonationComponent } from './donation.component';
import { DonationService } from './donation.service';

describe('DonationComponent', () => {
  let serviceMock: any;
  let formBuilderMock: FormBuilder;
  let component: DonationComponent;
  let fixture: ComponentFixture<DonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DonationComponent],
      providers: [FormBuilder, DonationService, HttpTestingController],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    serviceMock = {
      getDonation: jest.fn(),
      postDonation: jest.fn(),
      patchDonation: jest.fn(),
      deleteDonation: jest.fn(),
    };

    fixture = TestBed.createComponent(DonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Donation Component', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  describe('business', () => {
    it('should create the Donation Component', () => {
      const fixt = new DonationComponent(formBuilderMock, serviceMock);
      expect(fixt).toBeTruthy();
    });

    it('should declare obj refereces', () => {
      expect(component.modelObj).toBeDefined();
      expect(component.formValues).toBeDefined();
      // expect(component.showAdd).toBeDefined();
    });
  });

  describe('boundary', () => {
    it('Initialize the form', () => {
      const formValues = {
        donar_id: '',
        ngo_id: '',
        donation_type: '',
        amount: '',
        donation_date: '',
      };
      expect(component.formValues.value).toEqual(formValues);
    });
  });

  describe('exception', () => {
    it('should invalidate the form when empty', () => {
      component.formValues.controls['donar_id'].setValue('');
      component.formValues.controls['ngo_id'].setValue('');
      component.formValues.controls['donation_type'].setValue('');
      component.formValues.controls['amount'].setValue('');
      component.formValues.controls['donation_date'].setValue('');
      expect(component.formValues.valid).toBeFalsy();
    });

    it('should validate the form ', () => {
      component.formValues.controls['donar_id'].setValue('1');
      component.formValues.controls['ngo_id'].setValue('1');
      component.formValues.controls['donation_type'].setValue('Type1');
      component.formValues.controls['amount'].setValue('5000');
      component.formValues.controls['donation_date'].setValue('19-05-2023');
      expect(component.formValues.valid).toBeTruthy();
    });

    it('donar_id field validity', () => {
      const c = component.formValues.controls['donar_id'];
      expect(c.valid).toBeFalsy();
      c.setValue('');
      expect(c.hasError('required')).toBeTruthy();
    });

    it('ngo_id field validity', () => {
      const c = component.formValues.controls['ngo_id'];
      expect(c.valid).toBeFalsy();
      c.setValue('');
      expect(c.hasError('required')).toBeTruthy();
    });

    it('donation_typefield validity', () => {
      const c = component.formValues.controls['donation_type'];
      expect(c.valid).toBeFalsy();
      c.setValue('');
      expect(c.hasError('required')).toBeTruthy();
    });

    it('amount field validity', () => {
      const c = component.formValues.controls['amount'];
      expect(c.valid).toBeFalsy();
      c.setValue('');
      expect(c.hasError('required')).toBeTruthy();
    });

    it('donation_date field validity', () => {
      const c = component.formValues.controls['donation_date'];
      expect(c.valid).toBeFalsy();
      c.setValue('');
      expect(c.hasError('required')).toBeTruthy();
    });
  });

  describe('boundary', () => {
    it('Test initial form fields', () => {
      const form = component.formValues;
      const values = {
        donar_id: '',
        ngo_id: '',
        donation_type: '',
        amount: '',
        donation_date: '',
      };
      expect(form.value).toEqual(values);
    });
  });

  describe('boundary', () => {
    it('testing formgroup and elemet count', () => {
      const formElement =
        fixture.debugElement.nativeElement.querySelector('#formValues');
      const inputElements = formElement.querySelectorAll('input');
      expect(inputElements.length).toEqual(5);
    });
  });
});
