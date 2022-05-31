import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './componet/add-course/add-course.component';
import { LoginComponent } from './componet/login/login.component';
import { LoginTeacherComponent } from './componet/login-teacher/login-teacher.component';
import { UnsetCourseComponent } from './componet/unset-course/unset-course.component';
import { RegisResultComponent } from './componet/regis-result/regis-result.component';
import { TimetableComponent } from './componet/timetable/timetable.component';
import { StudentDataComponent } from './componet/student-data/student-data.component';
import { TeacherClassComponent } from './componet/teacher-class/teacher-class.component';
import { StudentInclassComponent } from './componet/student-inclass/student-inclass.component';
import { SubjectComponent } from './componet/subject/subject.component';
import { DetailsComponent } from './componet/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    LoginComponent,
    LoginTeacherComponent,
    UnsetCourseComponent,
    RegisResultComponent,
    TimetableComponent,
    StudentDataComponent,
    TeacherClassComponent,
    StudentInclassComponent,
    SubjectComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Material Modules
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
