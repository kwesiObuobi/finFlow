import { Component, inject } from '@angular/core';
import { Header } from "../../components/header/header";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transaction',
  imports: [Header],
  templateUrl: './new-transaction.html',
  styleUrl: './new-transaction.css',
})
export class NewTransaction {
  private router = inject(Router)
  handleClick() {
    this.router.navigate(['/categories/miscellaneous'])
  }
}
