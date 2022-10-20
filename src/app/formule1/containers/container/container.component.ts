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

  nationality$: Observable<any[]>;

  filteredNationality$: Observable<Drivers[]>;

  search$ = new BehaviorSubject<string | null>(null);

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.res$ = this.httpClient.get<Result>(
      'https://ergast.com/api/f1/drivers.json?limit=1000'
    );

    this.Drivers$ = this.res$.pipe(
      map((res) => {
        return res.MRData['DriverTable']['Drivers'];
      })
    );

    this.nationality$ = this.Drivers$.pipe(
      map((driver) => {
        let arrayOfnationalty = driver.map((p) => p.nationality);

        return arrayOfnationalty;
      })
    );

    this.filteredNationality$ = combineLatest([
      this.Drivers$,
      this.search$,
    ]).pipe(
      map(([planets, search]) => {
        if (!search?.length) {
          return planets;
        }
        return planets.filter((p) => p.nationality.includes(search));
      })
    );
  }

  public Affiche_ALL_Information() {}
}
