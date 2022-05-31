import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Course } from 'src/app/service/course';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Class } from 'src/app/service/class';
import { Teacher } from 'src/app/service/teacher';
import { Student } from 'src/app/service/student';
import { Register } from 'src/app/service/register';
import { Tabledelete } from '../unset-course/tabledelete';

@Component({
  selector: 'app-regis-result',
  templateUrl: './regis-result.component.html',
  styleUrls: ['./regis-result.component.css']
})
export class RegisResultComponent implements OnInit {
  stdlg!: Student;
  resultForm !: FormGroup;
  table!: Tabledelete[];
  table2 :Tabledelete[]=[];
  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.stdlg = this.apiService.takestd();
    this.resultForm = this.fb.group({
      Term:['', [Validators.required]],
      Year:['', [Validators.required]],
    });
  }
  getclass(f:FormGroup){
    this.table2 =[];
    let term=parseInt(f.get('Term')?.value);
    let year =parseInt(f.get('Year')?.value);
    console.log('I will edit: '+JSON.stringify(term));
    this.apiService.getrg(this.stdlg.std_id).subscribe(
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
    );
    // console.log('I will edit: '+JSON.stringify(this.table));
  }
}
