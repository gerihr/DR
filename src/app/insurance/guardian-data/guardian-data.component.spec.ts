import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianDataComponent } from './guardian-data.component';

describe('GuardianDataComponent', () => {
  let component: GuardianDataComponent;
  let fixture: ComponentFixture<GuardianDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardianDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardianDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
