import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongesPrisComponent } from './conges-pris.component';

describe('CongesPrisComponent', () => {
  let component: CongesPrisComponent;
  let fixture: ComponentFixture<CongesPrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongesPrisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongesPrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
