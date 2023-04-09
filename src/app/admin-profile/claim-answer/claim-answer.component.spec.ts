import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimAnswerComponent } from './claim-answer.component';

describe('ClaimAnswerComponent', () => {
  let component: ClaimAnswerComponent;
  let fixture: ComponentFixture<ClaimAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
