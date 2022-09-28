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
import { breedReducer } from './store/cat.reducer';
import { CatEffects } from './store/cat.effect';
import { MaterialModule } from './material/material.module';
import { breedsStoreKey } from './store/cat.selector';
import { CatInterceptor } from './interceptors/cat.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CatWrapperComponent } from './components/cat-wrapper/cat-wrapper.component';
import { CatService } from './services/cat.service';

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
  ],
  providers:[
    CatService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
