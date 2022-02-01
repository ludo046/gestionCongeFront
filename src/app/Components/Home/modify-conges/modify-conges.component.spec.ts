import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCongesComponent } from './modify-conges.component';

describe('ModifyCongesComponent', () => {
  let component: ModifyCongesComponent;
  let fixture: ComponentFixture<ModifyCongesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyCongesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
