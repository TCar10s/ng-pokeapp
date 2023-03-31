import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconRuler2, IconWeight, IconRuler } from 'angular-tabler-icons/icons';

const icons = {
  IconRuler2,
  IconRuler,
  IconWeight,
};

@NgModule({
  declarations: [],
  imports: [CommonModule, TablerIconsModule.pick(icons)],
  exports: [TablerIconsModule],
})
export class IconsModule {}
