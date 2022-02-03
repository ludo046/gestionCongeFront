import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyJourComponent } from './modify-jour.component';

describe('ModifyJourComponent', () => {
  let component: ModifyJourComponent;
  let fixture: ComponentFixture<ModifyJourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyJourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
