import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccountsComponent } from './vaccounts.component';

describe('VaccountsComponent', () => {
  let component: VaccountsComponent;
  let fixture: ComponentFixture<VaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
