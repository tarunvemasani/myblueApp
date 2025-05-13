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
  showAccountOptions = false;
  dropdownOpen = false;

  constructor(private router: Router) {}

  toggleAccountOptions(): void {
    this.showAccountOptions = !this.showAccountOptions;
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  viewProfile(): void {
    alert('Profile clicked');
  }

  viewSettings(): void {
    alert('Settings clicked');
  }
}
