import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpexitComponent } from './empexit.component';

describe('EmpexitComponent', () => {
  let component: EmpexitComponent;
  let fixture: ComponentFixture<EmpexitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpexitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpexitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
