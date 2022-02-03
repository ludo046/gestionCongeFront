import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJourComponent } from './delete-jour.component';

describe('DeleteJourComponent', () => {
  let component: DeleteJourComponent;
  let fixture: ComponentFixture<DeleteJourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteJourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
