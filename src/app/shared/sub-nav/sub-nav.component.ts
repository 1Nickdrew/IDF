// sub-nav.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SubNavItem {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-sub-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent {
  @Input() items: SubNavItem[] = [
    { icon: 'icones/car/wheel.svg', label: 'All' },
    { icon: 'icones/brand/toyota.svg', label: 'Toyota' },
    { icon: 'icones/brand/mercedes-benz.svg', label: 'Mercedes' },
    { icon: 'icones/brand/hyundai.svg', label: 'Hyundai' },
    { icon: 'icones/brand/bmw.svg', label: 'Bmw' }
  ];

  @Input() activeItem: string | null = null;

  onItemClick(item: SubNavItem) {
    this.activeItem = item.label;
  }
}