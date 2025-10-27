import { Component, inject } from '@angular/core';
import { Header } from "../../components/header/header";
import { Router } from '@angular/router';
import { GoBack } from "../../components/go-back/go-back";

@Component({
  selector: 'app-new-transaction',
  imports: [Header, GoBack],
  templateUrl: './new-transaction.html',
  styleUrl: './new-transaction.css',
})
export class NewTransaction {
  private router = inject(Router)
  handleClick() {
    this.router.navigate(['/categories/miscellaneous'])
  }
}
