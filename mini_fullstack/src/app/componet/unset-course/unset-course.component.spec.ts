import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsetCourseComponent } from './unset-course.component';

describe('UnsetCourseComponent', () => {
  let component: UnsetCourseComponent;
  let fixture: ComponentFixture<UnsetCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsetCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsetCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
