import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pet } from '@nx04/core-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private URL = 'https://server-30-x-30.herokuapp.com/pets'

  constructor(private httpClient: HttpClient) { }

  getPets() {
    return this.httpClient.get(this.URL);
  }

  createPet(pet: Pet) {
    return this.httpClient.post(this.URL, pet);
  }

  updatePet(pet: Pet) {
    return this.httpClient.patch(this.URL + '/' + pet.id, pet)
  }

}
