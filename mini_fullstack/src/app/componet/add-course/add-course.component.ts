import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Course } from 'src/app/service/course';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Class } from 'src/app/service/class';
import { Teacher } from 'src/app/service/teacher';
import { Tableadd } from './tableadd';
import { Student } from 'src/app/service/student';
import { Register } from 'src/app/service/register';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  stdlg!: Student;
  courseForm !: FormGroup;
  course !: Course[];
  class !: Class[];
  class1 !: Class;
  teacher !: Teacher[];
  table!: Tableadd[];
  tableteamp!:Tableadd;
  table2 :Tableadd[]=[];
  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      Term:['', [Validators.required]],
      Year:['', [Validators.required]],
    });
    this.stdlg = this.apiService.takestd();
  }
  getclass(f:FormGroup){
    this.table2 =[];
    let term=parseInt(f.get('Term')?.value);
    let year =parseInt(f.get('Year')?.value);
    this.apiService.getClass().subscribe(
      Afriend => {
        this.table=Afriend;
        // console.log('I will edit: '+JSON.stringify(this.class));
        // this.apiService.setclass(this.class);
        for(let i=0;i < this.table.length ; i++){
          if(this.table[i].year === year ){
            if(this.table[i].term === term){
              this.table2.push(this.table[i]);
            }
          }
        }
      }
      // Afriend => this.class=Afriend
    );

  }


  //register
  addcourse(id: number){
    let rg = new Register(
      this.stdlg.std_id,
      id
    )
    this.apiService.registercourse(rg).subscribe(
      (res) => {
        // console.log(res, 'res==>');
      }
    );
    // tclass1:Class;
    // this.apiService.getclass(rg.class_id).subscribe(
    //   Afriend => {
    //     // console.log('I will edit: '+JSON.stringify(Afriend));
    //     // console.log('password: '+ password );
    //     // console.log('password: '+ password1);
    //     // this.class1.class_id = Afriend.class_id;
    //     // this.class1.class_name = Afriend.class_name;
    //     // this.class1.Total_rg_st = Afriend.Total_rg_st;
    //     // this.class1.Total_rg_st_max = Afriend.Total_rg_st_max;
    //     // this.class1.starttime = Afriend.starttime;
    //     // this.class1.endtime = Afriend.endtime;
    //     // this.class1.day = Afriend.day;
    //     // this.class1.course_id = Afriend.course_id;
    //     // this.class1.Teach_id = Afriend.Teach_id;
    //     this.class1=Afriend;
    //   }
    // );
    // this.class1.Total_rg_st = this.class1.Total_rg_st + 1;
    // // console.log('I will edit: '+JSON.stringify(this.class1));
    // let up = new Class(
    //   this.class1.class_id,
    //   this.class1.class_name,
    //   this.class1.Total_rg_st,
    //   this.class1.Total_rg_st_max,
    //   this.class1.starttime,
    //   this.class1.endtime,
    //   this.class1.day,
    //   this.class1.course_id,
    //   this.class1.Teach_id
    // )
    // this.apiService.updateclass(up,up.class_id).subscribe(
    //   (res) => {
    //     console.log(res, 'res==>');
    //   }
    // );
  }
}
