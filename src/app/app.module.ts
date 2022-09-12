import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatFilterComponent } from './cat-filter/cat-filter.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { AppComponent } from './app.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { breedReducer } from './cat-store/cat.reducer';
import { CatEffects } from './cat-store/cat.effect';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CatFilterComponent,
    CatListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ breeds: breedReducer }),
    EffectsModule.forRoot([CatEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { };
