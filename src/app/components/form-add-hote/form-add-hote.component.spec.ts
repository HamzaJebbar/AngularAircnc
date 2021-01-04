import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddHoteComponent } from './form-add-hote.component';

describe('FormAddHoteComponent', () => {
  let component: FormAddHoteComponent;
  let fixture: ComponentFixture<FormAddHoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddHoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddHoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
