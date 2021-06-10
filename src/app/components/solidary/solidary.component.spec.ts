import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidaryComponent } from './solidary.component';

describe('SolidaryComponent', () => {
  let component: SolidaryComponent;
  let fixture: ComponentFixture<SolidaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolidaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
