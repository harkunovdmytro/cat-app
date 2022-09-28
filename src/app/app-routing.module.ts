import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatWrapperComponent } from './components/cat-wrapper/cat-wrapper.component';
import { CatsResolver } from './cats.resolver';

const routes: Routes = [
  {
    path: '',
    component: CatWrapperComponent,
    resolve: { breeds: CatsResolver },
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
