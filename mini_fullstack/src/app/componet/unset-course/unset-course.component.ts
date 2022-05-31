import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Course } from 'src/app/service/course';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Class } from 'src/app/service/class';
import { Teacher } from 'src/app/service/teacher';
import { Student } from 'src/app/service/student';
import { Register } from 'src/app/service/register';
import { Tabledelete } from './tabledelete';
@Component({
  selector: 'app-unset-course',
  templateUrl: './unset-course.component.html',
  styleUrls: ['./unset-course.component.css']
})
export class UnsetCourseComponent implements OnInit {
  stdlg!: Student;
  deleteForm !: FormGroup;
  table!: Tabledelete[];
  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.stdlg = this.apiService.takestd();
    this.getclass();
  }
  getclass(){
    this.apiService.getrg(this.stdlg.std_id).subscribe(
      Afriend => {
        this.table=Afriend;
        // console.log('I will edit: '+JSON.stringify(this.class));
        // this.apiService.setclass(this.class);

      }
    );
  }

  deleterg(id: number){
    // console.log('I will edit: '+ id );
    this.apiService.deletecourse(id).subscribe(
      response => {
        this.getclass();
      }

    );
  }

}
