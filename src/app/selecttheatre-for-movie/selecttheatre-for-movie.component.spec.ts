import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttheatreForMovieComponent } from './selecttheatre-for-movie.component';

describe('SelecttheatreForMovieComponent', () => {
  let component: SelecttheatreForMovieComponent;
  let fixture: ComponentFixture<SelecttheatreForMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttheatreForMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttheatreForMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
