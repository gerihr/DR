import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsListItemComponent } from './claims-list-item.component';

describe('ClaimsListItemComponent', () => {
  let component: ClaimsListItemComponent;
  let fixture: ComponentFixture<ClaimsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
