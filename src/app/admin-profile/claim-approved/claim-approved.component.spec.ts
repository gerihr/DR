import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimApprovedComponent } from './claim-approved.component';

describe('ClaimApprovedComponent', () => {
  let component: ClaimApprovedComponent;
  let fixture: ComponentFixture<ClaimApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
