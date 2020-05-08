import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { QuizscreenComponent } from './quizscreen/quizscreen.component';


const routes: Routes = [{path: 'registeration' , component: RegisterationComponent},
                         {path: 'login' , component: LoginComponent},
                          {path: 'quizScreen' , component: QuizscreenComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
