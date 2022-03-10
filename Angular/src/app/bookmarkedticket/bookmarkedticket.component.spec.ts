import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedticketComponent } from './bookmarkedticket.component';

describe('BookmarkedticketComponent', () => {
  let component: BookmarkedticketComponent;
  let fixture: ComponentFixture<BookmarkedticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkedticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
