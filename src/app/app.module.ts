import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizscreenComponent } from './quizscreen/quizscreen.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IntroductionScreenComponent } from './containers/introduction-screen/introduction-screen.component';
import { QuestionsComponent } from './containers/questions/questions.component';
import { ResultComponent } from './containers/result/result.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    LoginComponent,
    QuizscreenComponent,
    IntroductionScreenComponent,
    QuestionsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
  }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
