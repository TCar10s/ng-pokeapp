import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  template: `
    <div class="skill">
      <div class="skill__name">{{ name }}</div>
      <div class="skill__value">{{ value }}</div>
      <div class="skill__level">
        <p-progressBar
          [value]="value"
          [showValue]="false"
          styleClass="progress"
        ></p-progressBar>
      </div>
    </div>
  `,
  styles: [
    `
      .skill {
        display: grid;
        grid-template-columns: 20% 10% 70%;
        grid-gap: 10px;

        &__level {
          display: flex;
          flex-direction: column;
          justify-content: center;

          ::ng-deep {
            .progress {
              background-color: var(--surface-100);
              border-radius: 100px;
              height: 10px;
            }
          }
        }
      }
    `,
  ],
})
export class SkillComponent {
  @Input() name: string = '';
  @Input() value: number = 0;
}
