import { Component, OnInit } from '@angular/core';

import { PetsService } from '@nx04/core-data';

@Component({
  selector: 'nx04-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets$;

  constructor(private petsService: PetsService) { }

  ngOnInit() {
    this.getPets();
  }

  getPets() {
    this.pets$ = this.petsService.getPets();
    console.log("PetsComponent getPets:", this.pets$)
  }

}
