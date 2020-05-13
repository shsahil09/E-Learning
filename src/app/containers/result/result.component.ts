import { Component, OnInit, Input } from '@angular/core';
import { QuizQuestion } from 'src/app/model/QuizQuestion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() answer: string;
  @Input() question: QuizQuestion;
  totalQuestions: number;
  allQuestions: QuizQuestion[];
  correctAnswersCount: number;
  percentage: number;
  completionTime: number;
  elapsedMinutes: number;
  elapsedSeconds: number;
  codelabUrl = 'https://www.codelab.fun';

  CONGRATULATIONS = '../../../assets/images/ngtrophy.jpg';

  constructor(private router: Router) {
    this.totalQuestions = this.router.getCurrentNavigation().extras.state.totalQuestions;
    this.correctAnswersCount = this.router.getCurrentNavigation().extras.state.correctAnswersCount;
    this.completionTime = this.router.getCurrentNavigation().extras.state.completionTime;
    this.allQuestions = this.router.getCurrentNavigation().extras.state.allQuestions;
  }

  ngOnInit() {
    this.elapsedMinutes = Math.floor(this.completionTime / 60);
    this.elapsedSeconds = this.completionTime % 60;
    this.percentage = Math.round(100 * this.correctAnswersCount / this.totalQuestions);
  }
  restartQuiz(): void {
    this.router.navigate(['/intro']);
  }

}
