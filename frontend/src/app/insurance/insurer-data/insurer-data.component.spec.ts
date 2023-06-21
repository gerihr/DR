import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurerDataComponent } from './insurer-data.component';

describe('InsurerDataComponent', () => {
  let component: InsurerDataComponent;
  let fixture: ComponentFixture<InsurerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurerDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
