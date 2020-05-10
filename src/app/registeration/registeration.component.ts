import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegisterationService } from './registerationService';
import { Router } from '@angular/router';
import { RegisterationModel } from './registerationModel';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
  providers: [RegisterationService]
})
export class RegisterationComponent implements OnInit {
  alreadyExist = false;
  enterAllFields = false;
  model: RegisterationModel;
  registerationForm = new FormGroup({
    email : new FormControl(' ' , [ Validators.required , Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    username: new FormControl(' ', [Validators.required]),
    password: new FormControl(' ', [Validators.required])
  });

  get email() {
    return this.registerationForm.get('email');
  }
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router ,  private formBuilder: FormBuilder , private service: RegisterationService , private SpinnerService: NgxSpinnerService) {
  this.model = new RegisterationModel(' ', ' ' , ' ');
  }

  ngOnInit(): void {
    this.alreadyExist = false;
    this.registerationForm = this.formBuilder.group({
      email: ['' , Validators.required],
      username: [' ' , Validators.required],
      password: ['', Validators.required]
  });
}
    onRegisterButtonClicked(): void {
    if (this.registerationForm.invalid) {
      this.enterAllFields = true;
      return;
    }
    this.SpinnerService.show();
    const email = this.registerationForm.get('email').value;
    const username = this.registerationForm.get('username').value;
    const password = this.registerationForm.get('password').value;
    this.model.setEmail(email);
    this.model.setPassword(password);
    this.model.setUserName(username);
    this.service.insertUser(this.model).subscribe(data => {
      this.SpinnerService.hide();
      if (data) {
        this.router.navigate(['/intro']);
      } else {
        this.alreadyExist = true;
      }
    });
  }
}
