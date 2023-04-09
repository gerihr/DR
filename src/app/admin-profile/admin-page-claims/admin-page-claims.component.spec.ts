import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageClaimsComponent } from './admin-page-claims.component';

describe('AdminPageClaimsComponent', () => {
  let component: AdminPageClaimsComponent;
  let fixture: ComponentFixture<AdminPageClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageClaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
