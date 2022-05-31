import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Student } from 'src/app/service/student';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  studentForm !: FormGroup;
  student !: Student;
  newstudent = {id: 0, name:'',password:'',major:'',branch:'',sex:''};

  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    // this.studentData = {} as Student;
  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]],
    });
  }

  onsubmit(f:FormGroup): void{
    let username = f.get('username')?.value;
    let password = f.get('password')?.value;
    let password1: string;
    this.apiService.getstd(username).subscribe(
      Afriend => {
        password1 = Afriend.std_password;
        // console.log('I will edit: '+JSON.stringify(Afriend));
        // console.log('password: '+ password );
        // console.log('password: '+ password1);
        if( password1 == password){
          this.isLoggedIn=true;
          this.student = Afriend;
          this.apiService.setstd(this.student);
          this.router.navigateByUrl('/AddCourse');
        }
        else{
          this.isLoginFailed=true;
        }
      }
    );
  }
  // reloadPage(): void {
  //   window.location.reload();
  // }
}
