import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import axe from 'axe-core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {
    axe.run(document, {}, (err, results) => {
      if (err) throw err;
      results.violations.forEach(v => {
        console.warn('Accessibility issue:', v);
        v.nodes.forEach(node => {
          const selector = node.target[0] as string;
          const el = document.querySelector(selector);
          if (el) {
            el.classList.add('a11y-error');
            el.setAttribute('data-issue', v.description);
          }
        });
      });
    });
  }
}
