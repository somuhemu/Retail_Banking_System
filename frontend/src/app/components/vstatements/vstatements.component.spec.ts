import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VstatementsComponent } from './vstatements.component';

describe('VstatementsComponent', () => {
  let component: VstatementsComponent;
  let fixture: ComponentFixture<VstatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VstatementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VstatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
