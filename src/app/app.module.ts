import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { courseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error.404/error-404.component';


@NgModule({ //decorator
  declarations: [
    AppComponent,
    courseListComponent, // está vindo do course list component
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full' //quando nao rota direciona para courses
      },
      {
        path: 'courses', component: courseListComponent // rota de courses
      },
      {
        path: '**', component: Error404Component
      }
    ])
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
