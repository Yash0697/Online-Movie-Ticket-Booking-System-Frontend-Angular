import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByMovieNameComponent } from './search-by-movie-name.component';

describe('SearchByMovieNameComponent', () => {
  let component: SearchByMovieNameComponent;
  let fixture: ComponentFixture<SearchByMovieNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByMovieNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByMovieNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
