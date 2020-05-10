import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { QuizscreenComponent } from './quizscreen/quizscreen.component';
import { IntroductionScreenComponent } from './containers/introduction-screen/introduction-screen.component';
import { QuestionsComponent } from './containers/questions/questions.component';
import { ResultComponent } from './containers/result/result.component';


const routes: Routes = [{path: 'registeration' , component: RegisterationComponent},
                         {path: 'login' , component: LoginComponent},
                          {path: 'quizScreen' , component: QuizscreenComponent},
                           {path: 'intro' , component: IntroductionScreenComponent},
                           { path: 'question/:questionId', component: QuestionsComponent, pathMatch: 'full' },
                           { path: 'results', component: ResultComponent, pathMatch: 'full' },
                           {path: '' , redirectTo: '/login' , pathMatch: 'full'}
                          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
