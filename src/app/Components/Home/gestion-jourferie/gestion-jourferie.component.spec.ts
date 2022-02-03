import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionJourferieComponent } from './gestion-jourferie.component';

describe('GestionJourferieComponent', () => {
  let component: GestionJourferieComponent;
  let fixture: ComponentFixture<GestionJourferieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionJourferieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionJourferieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
