import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavBarItem {
  reference: string;
  title: string;
}

@Component({
  selector: 'nav-bar-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public navBarItems = signal<NavBarItem[]>([
    { reference: '#about', title: 'About' },
    { reference: '#experience', title: 'Experience' },
    { reference: '#projects', title: 'Projects' },
    { reference: '#contact', title: 'Contact' }
  ]);
}
