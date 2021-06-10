import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRefundComponent } from './change-refund.component';

describe('ChangeRefundComponent', () => {
  let component: ChangeRefundComponent;
  let fixture: ComponentFixture<ChangeRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeRefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
