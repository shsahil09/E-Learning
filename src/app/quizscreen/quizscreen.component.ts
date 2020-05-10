import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuizQuestion } from '../model/QuizQuestion';

@Component({
  selector: 'app-quizscreen',
  templateUrl: './quizscreen.component.html',
  styleUrls: ['./quizscreen.component.scss']
})
export class QuizscreenComponent implements OnInit {
  @Output() answer = new EventEmitter<string>();
  @Output() formGroup: FormGroup;
  @Input() question: QuizQuestion;
  option = '';
  grayBorder = '2px solid #979797';
  constructor() { }

  ngOnInit(): void {
  }

  radioChange(answer: string) {
    this.question.selectedOption = answer;
    this.answer.emit(answer);
    this.displayExplanation();
  }

  displayExplanation(): void {
    const questionElem = document.getElementById('question');
    if (questionElem !== null) {
      questionElem.innerHTML = 'Option ' + this.question.answer + ' was correct because ' + this.question.explanation + '.';
      questionElem.style.border = this.grayBorder;
    }
  }
  isCorrect(option: string): boolean {
    return this.question.selectedOption && option === this.question.answer;
  }

  // mark incorrect answer if selected
  isIncorrect(option: string): boolean {
    return option !== this.question.answer && option === this.question.selectedOption;
  }

  onSubmit() {
    this.formGroup.reset({answer: null});
  }
}
