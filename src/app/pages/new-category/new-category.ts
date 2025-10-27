import { Component, inject } from '@angular/core';
import { Header } from "../../components/header/header";
import { Router } from '@angular/router';
import { GoBack } from "../../components/go-back/go-back";

@Component({
  selector: 'app-new-category',
  imports: [Header, GoBack],
  templateUrl: './new-category.html',
  styleUrl: './new-category.css',
})
export class NewCategory {
  private router = inject(Router)
  handleClick() {
    this.router.navigate(['/categories'])
  }
}
