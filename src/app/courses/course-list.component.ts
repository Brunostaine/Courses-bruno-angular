import { Component, OnInit } from "@angular/core";
import { Course } from "./course";



@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})

export class courseListComponent implements OnInit { // importar no modulo raiz
    _courses: Course[] = [];

    ngOnInit(): void {
        this._courses = [
            {
                id: 1,
                name: 'Angular Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-1235',
                duration: 120,
                rating: 4,
                releaseDate: 'Março 2022',
                description: '',
            },
            {
                id: 2,
                name: 'Angular Http',
                imageUrl: '/assets/images/http.png',
                price: 49.99,
                code: 'XPS-9587',
                duration: 60,
                rating: 4.5,
                releaseDate: 'Março 2022',
                description: '',
            }
        ]
    }
}