import { Routes } from '@angular/router';
import { Splashscreen } from './pages/splashscreen/splashscreen';
import { CategoriesPage } from './pages/categories-page/categories-page';
import { NewCategory } from './pages/new-category/new-category';

export const routes: Routes = [
  {
    path: '',
    component: Splashscreen,
    pathMatch: 'full',
  },
  {
    path: 'categories',
    component: CategoriesPage,
    pathMatch: 'full',
  },
  {
    path: 'categories/new',
    component: NewCategory,
    pathMatch: 'full',
  },
  {
    path: 'categories/:categoryId/transactions',
    component: Splashscreen,
    pathMatch: 'full',
  }
];
