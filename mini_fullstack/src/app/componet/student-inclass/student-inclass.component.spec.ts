import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInclassComponent } from './student-inclass.component';

describe('StudentInclassComponent', () => {
  let component: StudentInclassComponent;
  let fixture: ComponentFixture<StudentInclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
