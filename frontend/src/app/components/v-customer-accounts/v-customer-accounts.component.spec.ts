import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCustomerAccountsComponent } from './v-customer-accounts.component';

describe('VCustomerAccountsComponent', () => {
  let component: VCustomerAccountsComponent;
  let fixture: ComponentFixture<VCustomerAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VCustomerAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VCustomerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
