import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { flattenDeep } from 'lodash';

import { Drivers } from '../../interfaces/drivers.interface';
import { MRData } from '../../interfaces/MRData.interface';

interface Result {
  MRData: MRData[];
}

@Component({
  selector: 'app-courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CoursesComponent implements OnInit {
  res$: Observable<Result>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.res$ = this.httpClient.get<Result>(
      'https://ergast.com/api/f1/drivers.json?limit=1000'
    );
  }
}
