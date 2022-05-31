import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Course } from 'src/app/service/course';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Class } from 'src/app/service/class';
import { Teacher } from 'src/app/service/teacher';
import { Student } from 'src/app/service/student';
import { Register } from 'src/app/service/register';
import { Tabledelete } from '../unset-course/tabledelete';
import { Tableadd } from '../add-course/tableadd';
import { Tablelist } from './tablelist';
@Component({
  selector: 'app-student-inclass',
  templateUrl: './student-inclass.component.html',
  styleUrls: ['./student-inclass.component.css']
})
export class StudentInclassComponent implements OnInit {
  teach !: Teacher;
  class_id!: number;
  table!: Tablelist[];

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.teach=this.apiService.takeTeach();
    this.class_id= this.apiService.takeclass_id();
    this.getlist();
  }
  getlist(){
    this.apiService.getclass(this.class_id).subscribe(
      Afriend => {
        this.table=Afriend;
        console.log('I will edit: '+JSON.stringify(this.table));
        // this.apiService.setclass(this.class);
      }
    );
  }
}
