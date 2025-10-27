import { Component, inject } from '@angular/core';
import { Header } from "../../components/header/header";
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-categories-page',
  imports: [Header, RouterLink],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.css',
})
export class CategoriesPage {
  private router = inject(Router)
  handleClick() {
    this.router.navigate(['/categories/miscellaneous'])
  }
}
