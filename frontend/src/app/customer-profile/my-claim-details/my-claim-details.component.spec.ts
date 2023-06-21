import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClaimDetailsComponent } from './my-claim-details.component';

describe('MyClaimDetailsComponent', () => {
  let component: MyClaimDetailsComponent;
  let fixture: ComponentFixture<MyClaimDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyClaimDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClaimDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
