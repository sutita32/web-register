import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Student } from './student';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Course } from './course';
import { Class } from './class';
import { Teacher } from './teacher';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  base_path = "http://localhost:3000";

  student!: Student;
  teacher!: Teacher;
  class_id!: number ;

  register!: Register;
  course!: Course[];
  class!: Class[];
  teacherlist!: Teacher[];


  constructor(private http: HttpClient) {
    // this.student = MockStudent.mStudent;
  }
  //login
  getstd(id:string): Observable<any> {
    return this.http.get(`${this.base_path}/student/${id}`);
  }
  setstd( std:Student){
    this.student = std;
  }
  getstdid():string {
    return this.student.std_id;
  }
  takestd(){
    return this.student;
  }

  getTeach(id:string): Observable<any> {
    return this.http.get(`${this.base_path}/teacher/${id}`);
  }
  setTeach( std:Teacher){
    this.teacher = std;
  }
  takeTeach(){
    return this.teacher;
  }
  //logout
  clearstd(){
    this.student.clear();
  }

  setclass_id(id:number){
    this.class_id=id;
  }
  takeclass_id(){
    return this.class_id;
  }

  //add course
  getClass(): Observable<any>{
    return this.http.get(`${this.base_path}/class/`);
  }

  registercourse(data: any): Observable<any> {
    // console.log(JSON.stringify( data ) );
    return this.http.post(`${this.base_path}/register/`, data );
  }


  updateclass(data: any, id: number): Observable<any> {
    // console.log(JSON.st)
    return this.http.put(`${this.base_path}/class/${id}`, data );
  }
  getclass(id:number): Observable<any> {
    return this.http.get(`${this.base_path}/class/${id}`);
  }

  //delete && result
  getrg(id:string): Observable<any>{
    return this.http.get(`${this.base_path}/register/${id}`);
  }
  deletecourse(id:Number): Observable<any>{
    console.log(id );
    return this.http.delete(`${this.base_path}/register/${id}`);
  }

  // teacher

}
