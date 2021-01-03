import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddAppartementComponent } from './form-add-appartement.component';

describe('FormAddAppartementComponent', () => {
  let component: FormAddAppartementComponent;
  let fixture: ComponentFixture<FormAddAppartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddAppartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
