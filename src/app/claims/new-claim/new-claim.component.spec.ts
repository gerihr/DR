import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClaimComponent } from './new-claim.component';

describe('NewClaimComponent', () => {
  let component: NewClaimComponent;
  let fixture: ComponentFixture<NewClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
