import { Component, computed, inject, input } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';
import { Icon } from './icon.component.model';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.less',
})
export class IconComponent {
  private themeService = inject(ThemeService);
  public color = computed(() =>
    this.themeService.theme() === 'light' ? '#4b6a9b' : '#ffffff'
  );
  public icon = input.required<Icon>();
}
