import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInsuranceComponent } from './get-insurance.component';

describe('GetInsuranceComponent', () => {
  let component: GetInsuranceComponent;
  let fixture: ComponentFixture<GetInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
