import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';

export const MaterialComponents = [
  MatSelectModule,
  MatFormFieldModule,
  MatPaginatorModule,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialComponents,
  ],
  exports: [
    MaterialComponents,
  ],
})
export class MaterialModule {
}
