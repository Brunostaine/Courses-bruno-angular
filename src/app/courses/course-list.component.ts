import { Component, OnInit } from "@angular/core";
import { Course } from "./course";



@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class courseListComponent implements OnInit { // importar no modulo raiz
    _courses: Course[] = [];

    ngOnInit(): void {
        this._courses = [
            {
                id: 1,
                name: 'Angular 1',
                imageUrl: '',
                price: 99.90,
                code: 'XPS-1235',
                duration: 120,
                rating: 4,
                releaseDate: 'DATA',
                description: '',
            },
            {
                id: 2,
                name: 'Angular 2',
                imageUrl: '',
                price: 45.90,
                code: 'XPS-9587',
                duration: 60,
                rating: 4.5,
                releaseDate: 'DATA',
                description: '',
            }
        ]
    }
}