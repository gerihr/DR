import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartInsuranceComponent } from './start-insurance.component';

describe('StartInsuranceComponent', () => {
  let component: StartInsuranceComponent;
  let fixture: ComponentFixture<StartInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
