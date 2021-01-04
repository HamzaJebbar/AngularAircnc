import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilHoteComponent } from './profil-hote.component';

describe('ProfilHoteComponent', () => {
  let component: ProfilHoteComponent;
  let fixture: ComponentFixture<ProfilHoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilHoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilHoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
