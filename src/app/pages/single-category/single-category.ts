import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { RouterLink } from '@angular/router'
import { GoBack } from "../../components/go-back/go-back";

@Component({
  selector: 'app-single-category',
  imports: [Header, RouterLink, GoBack],
  templateUrl: './single-category.html',
  styleUrl: './single-category.css',
})
export class SingleCategory {

}
