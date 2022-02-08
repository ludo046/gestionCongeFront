import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidCongesComponent } from './valid-conges.component';

describe('ValidCongesComponent', () => {
  let component: ValidCongesComponent;
  let fixture: ComponentFixture<ValidCongesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidCongesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
