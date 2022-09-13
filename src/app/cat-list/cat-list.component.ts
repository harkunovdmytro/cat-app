import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCategoryContent } from '../cat-store/cat.selector';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'],
})
export class CatListComponent {
  cats$ = this.store.select(selectCategoryContent);

  constructor(private store: Store) { };
}
