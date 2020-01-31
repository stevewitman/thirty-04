import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Pet } from '@nx04/core-data';

@Component({
  selector: 'nx04-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  @Input() pets: Pet[];
  @Output() selected = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
