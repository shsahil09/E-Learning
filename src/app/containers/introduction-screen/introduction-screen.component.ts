import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction-screen',
  templateUrl: './introduction-screen.component.html',
  styleUrls: ['./introduction-screen.component.css']
})
export class IntroductionScreenComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'none';
  }

  startQuiz() {
    this.router.navigateByUrl('/question/1');
  }
}
