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
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  res$: Observable<Result>;

  Drivers$: Observable<Drivers[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.res$ = this.httpClient.get<Result>(
      'https://ergast.com/api/f1/drivers.json'
    );

    this.Drivers$ = this.res$.pipe(
      map((res) => {
        console.log(res);
        return res.MRData['DriverTable']['Drivers'];
      })
    );
  }
}
