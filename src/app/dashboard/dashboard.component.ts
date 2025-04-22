import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  updatedAt: string = new Date('2025-04-14T14:46:00').toLocaleString();
  unreadMessages: number = 1;
  showAccountOptions: boolean = false;

  constructor(private router: Router) {}

  toggleAccountOptions(): void {
    this.showAccountOptions = !this.showAccountOptions;
  }

  logout(): void {
    this.showAccountOptions = false;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

