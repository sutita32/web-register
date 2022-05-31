import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componet/login/login.component';
import { LoginTeacherComponent } from './componet/login-teacher/login-teacher.component';
import { AddCourseComponent } from './componet/add-course/add-course.component';
import { UnsetCourseComponent } from './componet/unset-course/unset-course.component';
import { RegisResultComponent } from './componet/regis-result/regis-result.component';
import { TimetableComponent } from './componet/timetable/timetable.component';
import { StudentDataComponent } from './componet/student-data/student-data.component';
import { TeacherClassComponent } from './componet/teacher-class/teacher-class.component';
import { StudentInclassComponent } from './componet/student-inclass/student-inclass.component';
import { SubjectComponent } from './componet/subject/subject.component';
import { DetailsComponent } from './componet/details/details.component';

const routes: Routes = [
  { path: 'Student',component: LoginComponent},
  { path: 'Teacher',component: LoginTeacherComponent},
  { path: 'AddCourse',component: AddCourseComponent},
  { path: 'UnsetCourse',component: UnsetCourseComponent},
  { path: 'RegisResult',component: RegisResultComponent},
  { path: 'StudentData',component: StudentDataComponent },
  { path: 'Timetable',component: TimetableComponent},
  { path: 'TeacherClass',component: TeacherClassComponent},
  { path: 'StudentInclass',component: StudentInclassComponent},
  { path: 'Subject',component: SubjectComponent},
  { path: 'Details',component: DetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
