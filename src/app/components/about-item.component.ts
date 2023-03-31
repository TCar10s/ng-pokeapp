import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-item',
  template: `
    <div class="flex flex-column align-items-center">
      <span class="flex">
        <i-tabler *ngIf="icon" [name]="icon"></i-tabler>
        <p class="ml-2">{{ value }}</p>
      </span>

      <small class="text-center font-bold">{{ description }}</small>
    </div>
  `,
  styles: [``],
})
export class AboutItemComponent {
  @Input() icon: string = '';
  @Input() value: string = '';
  @Input() description: string = '';
}
