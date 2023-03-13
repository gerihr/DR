import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulClaimComponent } from './successful-claim.component';

describe('SuccessfulClaimComponent', () => {
  let component: SuccessfulClaimComponent;
  let fixture: ComponentFixture<SuccessfulClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
