import { Component, Input, OnInit } from '@angular/core';
import { Drivers } from '../../interfaces/drivers.interface';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
})
export class ComponentComponent implements OnInit {
  @Input() driver: Drivers;
  constructor() {}

  ngOnInit() {}
}
