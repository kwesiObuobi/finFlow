import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back',
  imports: [],
  templateUrl: './go-back.html',
  styleUrl: './go-back.css',
})
export class GoBack {
  constructor(private location: Location) {}

  onBackButton() {
    this.location.back();
  }
}
