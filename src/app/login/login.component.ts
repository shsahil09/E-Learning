import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Model } from './model';
import { LoginService } from './loginservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  enterAllFields = false;
  model: Model;
  notExist = false;
  loginForm = new FormGroup({
    email : new FormControl(' ' , [ Validators.required , Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password: new FormControl(' ' , [Validators.required])
  });

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder , private spinner: NgxSpinnerService, private loginservice: LoginService , private router: Router) {
    this.model = new Model(' ' , ' ');
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['' , Validators.required],
      password : ['' , Validators.required],
  });
  }
  get email() {
    return this.loginForm.get('email');
  }
  onLoginButtonClicked(): void {
    if (this.loginForm.invalid) {
      this.enterAllFields = true;
      return;
    }
    this.spinner.show();
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.model.setEmail(email);
    this.model.setPassword(password);
    this.loginservice.loginUser(this.model).subscribe(logindata => {
      this.spinner.hide();
      if (logindata) {
        this.router.navigate(['/quizScreen']);
      } else {
        this.notExist = true;
      }
    });


  }
}
