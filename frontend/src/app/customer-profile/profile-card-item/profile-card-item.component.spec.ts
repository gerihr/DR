import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardItemComponent } from './profile-card-item.component';

describe('ProfileCardItemComponent', () => {
  let component: ProfileCardItemComponent;
  let fixture: ComponentFixture<ProfileCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
