import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritedticketComponent } from './favoritedticket.component';

describe('FavoritedticketComponent', () => {
  let component: FavoritedticketComponent;
  let fixture: ComponentFixture<FavoritedticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritedticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritedticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
