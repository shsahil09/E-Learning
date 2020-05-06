import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginTitle = 'Login';
  registerTitle = 'Register';
  userName: string;
  ngOnInit(): void {

   }

   constructor(private router: Router) {

   }
   onLoginCLicked() {
    const value = document.getElementById('login').innerHTML;
    if (value === 'Login') {
        this.router.navigate(['/login']);
    }
}
onRegisterClicked() {
  const value = document.getElementById('register').innerHTML;
  if (value === 'Register') {
    this.router.navigate(['/registeration']);
  }
}
}
