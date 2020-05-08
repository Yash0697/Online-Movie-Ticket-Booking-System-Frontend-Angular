import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectshowformovieComponent } from './selectshowformovie.component';

describe('SelectshowformovieComponent', () => {
  let component: SelectshowformovieComponent;
  let fixture: ComponentFixture<SelectshowformovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectshowformovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectshowformovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
