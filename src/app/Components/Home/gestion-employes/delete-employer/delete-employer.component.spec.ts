import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployerComponent } from './delete-employer.component';

describe('DeleteEmployerComponent', () => {
  let component: DeleteEmployerComponent;
  let fixture: ComponentFixture<DeleteEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
