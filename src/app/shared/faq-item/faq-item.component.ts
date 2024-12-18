// faq-item.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss']
})
export class FaqItemComponent {
  @Input() question: string = 'Is there a free trial available?';
  @Input() answer: string = 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.';
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}