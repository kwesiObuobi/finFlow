import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Splashscreen } from "./pages/splashscreen/splashscreen";
import { CategoriesPage } from "./pages/categories-page/categories-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Splashscreen, CategoriesPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('finFlow');
}
