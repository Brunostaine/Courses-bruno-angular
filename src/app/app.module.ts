import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { courseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';


@NgModule({ //decorator
  declarations: [
    AppComponent,
    courseListComponent, // está vindo do course list component
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
