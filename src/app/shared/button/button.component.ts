import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important !

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [type]="type"
      class="custom-button" 
      [style.width]="width"
      [style.height]="height"
      [style.background-color]="backgroundColor"
      [style.color]="textColor"
      [style.border]="borderStyle"
      [style.border-radius]="borderRadius"
      [class.icon-only]="!showText && svgSrc"
      [disabled]="disabled"
      [class]="'icon-position-' + iconPosition"
    >
      <ng-container *ngIf="svgSrc">
        <img [src]="svgSrc" alt="Icon" class="icon" />
      </ng-container>
      <ng-container *ngIf="showText">
        <ng-content></ng-content>
      </ng-container>
    </button>
  `,
  styles: [`
    .custom-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1rem;

      &:hover {
        opacity: 0.9;
      }

      &:active {
        transform: scale(0.98);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    .custom-button .icon {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }

    .custom-button.icon-position-start {
      flex-direction: row;
    }

    .custom-button.icon-position-end {
      flex-direction: row-reverse;
    }

    .custom-button.icon-only {
      width: auto;
      padding: 8px;
    }
  `]
})
export class CustomButtonComponent {
  
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() svgSrc?: string;
  @Input() showText = true;
  @Input() width = '100%';
  @Input() height = '100%';
  @Input() backgroundColor = 'rgba(255, 188, 1, 1)';
  @Input() textColor = 'black';
  @Input() borderStyle = '1px solid rgba(255, 188, 1, 1)';
  @Input() borderRadius = '12px';
  @Input() iconPosition: 'start' | 'end' = 'start';
}
