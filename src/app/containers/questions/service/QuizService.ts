import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/Constants';
import { QuestionModel, QModel } from '../../../model/QuestionModel';

@Injectable()
export class QuizService {
model: QuestionModel;
constructor(private http: HttpClient) {
}

public checkCorrectAnswer(selectedOptions: string , questionId: number): Observable<QuestionModel[]> {
return this.http.post<QuestionModel[]>(Constants.QUESTIONSURL + questionId , {selectedOption: selectedOptions});
}

public getAnswer(): Observable<QModel[]> {
    return this.http.get<QModel[]>(Constants.QUESTIONSURL);
}
}
