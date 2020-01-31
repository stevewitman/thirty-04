import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'nx04-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent {
  currentPet;
  originalTitle;

  @Input() set pet(value) {
    if (value) this.originalTitle = value.title;
    this.currentPet = Object.assign({}, value);
  };
  @Input() form: FormGroup;

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log("FORM:", this.form.value)
  }

}
