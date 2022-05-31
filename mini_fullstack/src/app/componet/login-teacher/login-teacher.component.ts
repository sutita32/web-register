import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Student } from 'src/app/service/student';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { Teacher } from 'src/app/service/teacher';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})
export class LoginTeacherComponent implements OnInit {

  TeachForm !: FormGroup;
  teacher !: Teacher;

  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.TeachForm = this.fb.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]],
    });
  }
  onsubmit(f:FormGroup): void{
    let username = f.get('username')?.value;
    let password = f.get('password')?.value;
    let password1: string;
    this.apiService.getTeach(username).subscribe(
      Afriend => {
        password1 = Afriend.Teach_password;
        // console.log('I will edit: '+JSON.stringify(Afriend));
        // console.log('password: '+ password );
        // console.log('password: '+ password1);
        if( password1 == password){
          this.isLoggedIn=true;
          this.teacher = Afriend;
          this.apiService.setTeach(this.teacher);
          this.router.navigateByUrl('/Subject');
        }
        else{
          this.isLoginFailed=true;
        }
      }
    );
  }
}
