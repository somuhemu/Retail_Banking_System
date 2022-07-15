import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtransactionsComponent } from './vtransactions.component';

describe('VtransactionsComponent', () => {
  let component: VtransactionsComponent;
  let fixture: ComponentFixture<VtransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VtransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VtransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
