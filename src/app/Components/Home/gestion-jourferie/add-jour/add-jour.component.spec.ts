import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJourComponent } from './add-jour.component';

describe('AddJourComponent', () => {
  let component: AddJourComponent;
  let fixture: ComponentFixture<AddJourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
