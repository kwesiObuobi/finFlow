import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-single-category',
  imports: [Header, RouterLink],
  templateUrl: './single-category.html',
  styleUrl: './single-category.css',
})
export class SingleCategory {

}
