import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '@components/index';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

}
