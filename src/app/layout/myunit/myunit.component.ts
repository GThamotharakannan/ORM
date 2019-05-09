import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-myunit',
  templateUrl: './myunit.component.html',
  styleUrls: ['./myunit.component.scss'],
  animations: [routerTransition()]
})
export class MyunitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
