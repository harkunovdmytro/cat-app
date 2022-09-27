import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatFilterComponent } from './cat-filter/cat-filter.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { AppComponent } from './app.component';
import { breedReducer } from './cat-store/cat.reducer';
import { CatEffects } from './cat-store/cat.effect';
import { MaterialModule } from './material/material.module';
import { CatModule } from './cat-module/cat.module';
import { breedsStoreKey } from './cat-store/cat.selector';
import { CatInterceptor } from './services/cat.interceptor';

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
    CatModule,
    StoreModule.forRoot({ [breedsStoreKey]: breedReducer }),
    EffectsModule.forRoot([CatEffects]),
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
