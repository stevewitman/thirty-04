import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@nx04/material';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import { PetsComponent } from './pets/pets.component';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from '@nx04/ui-login';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PetDetailComponent,
    PetsListComponent,
    PetsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    UiLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

