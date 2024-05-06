import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    public dialog:  MatDialog


  ) {
    //this.courses=[]; pode inicializar por aqui porem geraria mais uma linha de codigo e consumiria mais memoria.
    //this.coursesService = new CoursesService();
    this.courses$=this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError;
        return of ([])
      })
    );
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   onError() {
    this.dialog.open(ErrorDialogComponent, {
      data:"errorMsg"
    });
  }
}

/*
  ngOnInit(): void {
  } */
