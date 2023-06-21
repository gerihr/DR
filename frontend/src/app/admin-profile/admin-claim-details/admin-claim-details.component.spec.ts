import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClaimDetailsComponent } from './admin-claim-details.component';

describe('AdminClaimDetailsComponent', () => {
  let component: AdminClaimDetailsComponent;
  let fixture: ComponentFixture<AdminClaimDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClaimDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClaimDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
