import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEmployerComponent } from './modify-employer.component';

describe('ModifyEmployerComponent', () => {
  let component: ModifyEmployerComponent;
  let fixture: ComponentFixture<ModifyEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
