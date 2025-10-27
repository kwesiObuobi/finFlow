import { Component, inject } from '@angular/core';
import { Header } from "../../components/header/header";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-category',
  imports: [Header],
  templateUrl: './new-category.html',
  styleUrl: './new-category.css',
})
export class NewCategory {
  private router = inject(Router)
  handleClick() {
    this.router.navigate(['/categories'])
  }
}
