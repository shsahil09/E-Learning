import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    LoginComponent,
    QuizscreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
