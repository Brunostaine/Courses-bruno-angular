import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { courseListComponent } from './courses/course-list.component';

@NgModule({ //decorator
  declarations: [
    AppComponent,
    courseListComponent, // está vindo do course list component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
