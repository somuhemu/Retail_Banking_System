import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAllCustomersComponent } from './v-all-customers.component';

describe('VAllCustomersComponent', () => {
  let component: VAllCustomersComponent;
  let fixture: ComponentFixture<VAllCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VAllCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VAllCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
