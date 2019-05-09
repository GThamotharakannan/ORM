import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-assign-unit',
  templateUrl: './assign-unit.component.html',
  styleUrls: ['./assign-unit.component.scss'],
  animations: [routerTransition()]
})
export class AssignUnitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('sdd');
  }

}
