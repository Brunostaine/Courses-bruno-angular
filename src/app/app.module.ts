import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { courseListComponent } from './courses/course-list.component';
import { StarComponent } from './shared/star/star.component';
import { ReplacePipe } from './shared/pipe/replace.pipe';
import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
import { Error404Component } from './core/component/error.404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';



@NgModule({ //decorator
  declarations: [
    AppComponent,
    courseListComponent, // está vindo do course list component
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full' //quando nao rota direciona para courses
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: 'courses', component: courseListComponent // rota de courses
      },
      {
        path: '**', component: Error404Component // Se não achar uma rota direciona para página de erro
      }
    ])
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
