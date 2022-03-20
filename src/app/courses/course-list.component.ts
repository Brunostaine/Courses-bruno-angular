import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";



@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})

export class courseListComponent implements OnInit { // importar no modulo raiz
    _courses: Course[] = [];

    constructor(private courseService: CourseService){} //injetando courseService

    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll()
    }          
}