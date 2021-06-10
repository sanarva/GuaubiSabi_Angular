import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorShopComponent } from './collaborator-shop.component';

describe('CollaboratorShopComponent', () => {
  let component: CollaboratorShopComponent;
  let fixture: ComponentFixture<CollaboratorShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
