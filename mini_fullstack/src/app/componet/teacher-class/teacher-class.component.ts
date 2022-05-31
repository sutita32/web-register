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
@Component({
  selector: 'app-teacher-class',
  templateUrl: './teacher-class.component.html',
  styleUrls: ['./teacher-class.component.css']
})
export class TeacherClassComponent implements OnInit {
  teach !: Teacher;
  teachForm !: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.teachForm = this.fb.group({
      Term:['', [Validators.required]],
      Year:['', [Validators.required]],
    });
    this.teach = this.apiService.takeTeach();



  }

}
