import { Component, OnInit } from '@angular/core';
import { CustomButtonComponent } from '../../shared/button/button.component';
import { CustomInputComponent } from '../../shared/input/input.component';
import { CommonModule } from '@angular/common'; // Important !
import { 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  Validators, 
  FormControl 
} from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, CustomInputComponent, ReactiveFormsModule, CustomButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
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
}
