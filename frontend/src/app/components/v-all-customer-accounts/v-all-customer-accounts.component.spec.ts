import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAllCustomerAccountsComponent } from './v-all-customer-accounts.component';

describe('VAllCustomerAccountsComponent', () => {
  let component: VAllCustomerAccountsComponent;
  let fixture: ComponentFixture<VAllCustomerAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VAllCustomerAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VAllCustomerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
