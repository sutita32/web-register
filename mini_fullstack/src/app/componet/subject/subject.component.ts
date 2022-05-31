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
import { Tableteach } from './tableteach';
import { Tableadd } from '../add-course/tableadd';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  teach !: Teacher;
  teachForm !: FormGroup;

  table!: Tableadd[];
  table2 :Tableadd[]=[];

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.teach = this.apiService.takeTeach();
    this.teachForm = this.fb.group({
      Term:['', [Validators.required]],
      Year:['', [Validators.required]],
    });
  }
  getclass(f:FormGroup){
    this.table2 =[];
    let term=parseInt(f.get('Term')?.value);
    let year =parseInt(f.get('Year')?.value);
    // console.log('I will edit: '+JSON.stringify(term));
    this.apiService.getClass().subscribe(
      Afriend => {
        this.table=Afriend;
        console.log('I will edit: '+ this.teach.Teach_id);
        // this.apiService.setclass(this.class);
        for(let i=0;i < this.table.length ; i++){

          if(this.table[i].year === year && this.table[i].term === term ){
            if(this.table[i].Teach_id === this.teach.Teach_id){
              this.table2.push(this.table[i]);
            }
            // this.table2.push(this.table[i]);
          }
        }
      }
    );
  }
  check(id: number){
    this.apiService.setclass_id(id);
    this.router.navigateByUrl('/StudentInclass');
  }

}
