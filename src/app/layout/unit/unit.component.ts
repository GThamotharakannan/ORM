import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
  animations: [routerTransition()]
})
export class UnitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
