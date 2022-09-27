import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatFilterComponent } from './components/cat-filter/cat-filter.component';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { AppComponent } from './app.component';
import { breedReducer } from './cat-store/cat.reducer';
import { CatEffects } from './cat-store/cat.effect';
import { MaterialModule } from './modules/material/material.module';
import { CatModule } from './modules/cat-module/cat.module';
import { breedsStoreKey } from './cat-store/cat.selector';
import { CatInterceptor } from './services/cat.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CatWrapperComponent } from './components/cat-wrapper/cat-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    CatFilterComponent,
    CatListComponent,
    CatWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ [breedsStoreKey]: breedReducer }),
    EffectsModule.forRoot([CatEffects]),
    MaterialModule,
    ReactiveFormsModule,
    CatModule,
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
