import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCongeComponent } from './show-conge.component';

describe('ShowCongeComponent', () => {
  let component: ShowCongeComponent;
  let fixture: ComponentFixture<ShowCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
