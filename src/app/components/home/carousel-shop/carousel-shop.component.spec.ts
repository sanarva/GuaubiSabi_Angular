import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselShopComponent } from './carousel-shop.component';

describe('CarouselShopComponent', () => {
  let component: CarouselShopComponent;
  let fixture: ComponentFixture<CarouselShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
