import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id:'1', name:'Angular', category:'front-end'}
  ]; //inicializadno aqui nos temos a economia de linha.
  displayedColumns = ['name', 'category'];

  constructor() {
    //this.courses=[]; pode inicializar por aqui porem geraria mais uma linha de codigo e consumiria mais memoria.
   }

  ngOnInit(): void {
  }

}
