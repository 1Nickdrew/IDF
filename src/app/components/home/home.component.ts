import { Component, OnInit } from '@angular/core';
import { CustomButtonComponent } from '../../shared/button/button.component';
import { CustomInputComponent } from '../../shared/input/input.component';
import { SubNavComponent } from '../../shared/sub-nav/sub-nav.component';
import { CarCardComponent } from '../../shared/car-card/car-card.component';
import { CarCardData } from '../../shared/car-card/car-card.interface';
import { CommonModule } from '@angular/common'; // Important !
import { 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  Validators, 
  FormControl 
} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule,CustomButtonComponent, CustomInputComponent, ReactiveFormsModule, SubNavComponent, CarCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [
        Validators.required, 
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required, 
        Validators.email
      ]]
    });
  }

  getUsernameControl(): FormControl {
    const control = this.form.get('username');
    if (!(control instanceof FormControl)) {
      throw new Error('Username control is not a FormControl');
    }
    return control;
  }

  clearUsername() {
    this.getUsernameControl().setValue('');
  }

  //sub-nav cars card section typescript code
  brandItems = [
    { icon: 'icones/car/wheel.svg', label: 'All' },
    { icon: 'icones/brand/toyota.svg', label: 'Toyota' },
    { icon: 'icones/brand/mercedes-benz.svg', label: 'Mercedes' },
    // Autres marques
  ];

  selectedBrand: string | null = null;

  // Car-Card TypeScript
  cars: CarCardData[] = [
    {
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
    },
    // Ajoutez plus de voitures ici
    {
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
    },
    {
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
    },
    {
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
    },
  ];
}
