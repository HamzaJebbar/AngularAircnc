import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHoteComponent } from './list-hote.component';

describe('ListHoteComponent', () => {
  let component: ListHoteComponent;
  let fixture: ComponentFixture<ListHoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
