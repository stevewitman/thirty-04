import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private URL = 'https://server-30-x-30.herokuapp.com/pets'

  constructor(private httpClient: HttpClient) { }

  getPets() {
    return this.httpClient.get(this.URL);
  }

}
