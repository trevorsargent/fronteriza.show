import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcutsComponent } from './offcuts.component';

describe('OffcutsComponent', () => {
  let component: OffcutsComponent;
  let fixture: ComponentFixture<OffcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffcutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
