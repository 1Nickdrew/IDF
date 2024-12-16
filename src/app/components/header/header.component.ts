import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../shared/button/button.component';
import { CommonModule } from '@angular/common'; // Important !

@Component({
  selector: 'app-header',
  imports: [CommonModule,CustomButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  nomImage = 'idf.png';

  getImagePath() {
    return `public/images/${this.nomImage}`;
  }
}
