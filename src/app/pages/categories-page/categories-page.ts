import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-categories-page',
  imports: [Header, RouterLink],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.css',
})
export class CategoriesPage {

}
