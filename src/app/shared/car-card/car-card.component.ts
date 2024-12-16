// car-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardData } from './car-card.interface';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {
  @Input() carData: CarCardData = {
    images: [{
      base: 'images/homepage/car-one.jpg',
      overlay: 'icones/card/heart.svg'
    }],
    details: {
      title: 'Ford shelby 2023',
      transmission: 'Automatic/Manual',
      seats: 5,
      rating: 4.5,
      pricePerDay: 65
    }
  };

  @Input() isLiked = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
  }
}