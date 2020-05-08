import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookticketformovieComponent } from './bookticketformovie.component';

describe('BookticketformovieComponent', () => {
  let component: BookticketformovieComponent;
  let fixture: ComponentFixture<BookticketformovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookticketformovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookticketformovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
