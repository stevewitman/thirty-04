import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pet } from '@nx04/core-data';

import { PetsService } from '@nx04/core-data';

@Component({
  selector: 'nx04-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets$;
  form: FormGroup;
  selectedPet: Pet;

  constructor(
    private petsService: PetsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getPets();
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])]
    })
  }

  getPets() {
    this.pets$ = this.petsService.getPets();
    console.log("PetsComponent getPets:", this.pets$)
  }

  selectPet(pet) {
    this.selectedPet = pet;
    this.form.patchValue(pet);
  }

  savePet(pet: Pet) {
    if (!pet.id) {
      this.createPet(pet);
    } else {
      this.updatePet(pet);
    }
  }

  createPet(pet) {
    this.petsService.createPet(pet)
      .subscribe(result => {
        this.getPets();
      });
  }
  updatePet(pet) {
    this.petsService.updatePet(pet)
      .subscribe(result => {
        this.getPets();
      });
  }

  cancel () {
    this.resetPet();
  }

  resetPet() {
    const emptyPet: Pet = {
      id: null,
      title: '',
      details: ''
    }
    this.selectPet(emptyPet);
  }

}
