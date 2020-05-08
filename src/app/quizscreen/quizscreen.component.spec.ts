import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizscreenComponent } from './quizscreen.component';

describe('QuizscreenComponent', () => {
  let component: QuizscreenComponent;
  let fixture: ComponentFixture<QuizscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
