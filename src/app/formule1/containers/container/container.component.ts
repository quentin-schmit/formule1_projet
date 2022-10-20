import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

import { flattenDeep } from 'lodash';
import { Planet } from '../../interfaces/drivers.interface';

interface Result {

}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  
  res$: Observable<Result>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.res$ = this.httpClient.get<Result>(
      'https://ergast.com/api/f1/drivers.json'
    );
  }
}
