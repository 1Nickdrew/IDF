import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  Validators, 
  FormControl 
} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class CustomInputComponent implements OnInit {
  
  @Input() inputId = `input-${Math.random().toString(36).substr(2, 9)}`; // Identifiant unique pour l'input
  @Input() label = ''; // Texte du label
  @Input() type: 'text' | 'password' | 'email' | 'number' = 'text'; // Type d'input
  @Input() placeholder = ''; // Placeholder
  @Input() control!: FormControl; // Contrôle de formulaire
  @Input() leftIconSrc?: string; // Icônes
  @Input() rightIconSrc?: string; // Icônes
  @Input() disabled = false; // États
  @Input() required = false; // États

  
  @Output() rightIconClick = new EventEmitter<void>();  // Événement de clic sur l'icône de droite
  isFocused = false; // États internes

  get showError(): boolean {
    return this.control?.invalid && 
           (this.control?.dirty || this.control?.touched); // Gestion des erreurs
  }

  get errorMessages(): string[] {
    if (!this.control?.errors) return [];

    const errors: string[] = [];
    
    if (this.control.errors['required']) {
      errors.push('Ce champ est obligatoire');
    }
    if (this.control.errors['email']) {
      errors.push('Veuillez entrer une adresse email valide');
    }
    if (this.control.errors['minlength']) {
      errors.push(`Longueur minimale de ${this.control.errors['minlength'].requiredLength} caractères`);
    }
    // Ajoutez d'autres types d'erreurs selon vos besoins

    return errors;
  }

  
  onFocus() {
    this.isFocused = true; // Méthodes de gestion des événements
  }

  onBlur() {
    this.isFocused = false;
  }

  onRightIconClick() {
    if (!this.disabled) {
      this.rightIconClick.emit();
    }
  }

  ngOnInit() {
    
    if (!this.control) {
      throw new Error('Un FormControl doit être fourni'); // Validation de la présence du contrôle
    }
  }
}
