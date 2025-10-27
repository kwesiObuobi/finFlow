import { Routes } from '@angular/router';
import { Splashscreen } from './pages/splashscreen/splashscreen';
import { CategoriesPage } from './pages/categories-page/categories-page';
import { NewCategory } from './pages/new-category/new-category';
import { SingleCategory } from './pages/single-category/single-category';
import { NewTransaction } from './pages/new-transaction/new-transaction';

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
    path: 'categories/:categoryId',
    component: SingleCategory,
    pathMatch: 'full',
  },
  {
    path: 'categories/:categoryId/transaction',
    component: NewTransaction,
    pathMatch: 'full',
  }
];
