import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGuaubisabiComponent } from './about-guaubisabi.component';

describe('AboutGuaubisabiComponent', () => {
  let component: AboutGuaubisabiComponent;
  let fixture: ComponentFixture<AboutGuaubisabiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutGuaubisabiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGuaubisabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
