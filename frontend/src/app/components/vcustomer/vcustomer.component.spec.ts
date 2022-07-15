import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcustomerComponent } from './vcustomer.component';

describe('VcustomerComponent', () => {
  let component: VcustomerComponent;
  let fixture: ComponentFixture<VcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
