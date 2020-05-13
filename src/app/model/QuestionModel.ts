export class QuestionModel {
    private questionId: number;
    private selectedOption: string;
    
    constructor(questionId: number , selectedOption: string) {
        this.questionId = questionId;
        this.selectedOption = selectedOption;
    }
    public setQuestionId(questionId: number): void {
     this.questionId = questionId;
    }

    public getQuestionId(): number {
     return this.questionId;
    }

    public setSelectedOption(selectedOption: string): void {
        this.selectedOption = selectedOption;
    }

    public getSelectedOption(): string {
        return this.selectedOption;
    }

}

export interface QModel {
     questionID: string;
     answer: string;
}

