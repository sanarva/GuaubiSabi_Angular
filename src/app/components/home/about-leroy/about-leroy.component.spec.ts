import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLeroyComponent } from './about-leroy.component';

describe('AboutLeroyComponent', () => {
  let component: AboutLeroyComponent;
  let fixture: ComponentFixture<AboutLeroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLeroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLeroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
