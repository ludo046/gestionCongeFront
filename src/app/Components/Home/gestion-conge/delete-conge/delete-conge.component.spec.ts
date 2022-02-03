import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCongeComponent } from './delete-conge.component';

describe('DeleteCongeComponent', () => {
  let component: DeleteCongeComponent;
  let fixture: ComponentFixture<DeleteCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
