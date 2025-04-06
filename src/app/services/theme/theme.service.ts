import { effect, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme = signal<Theme>('light');

  constructor() {
    effect(() => {
      document.getElementById('app')?.setAttribute('data-theme', this.theme());
    });
  }

  public toggleTheme() {
    this.theme.update(currentTheme =>
      currentTheme === 'light' ? 'dark' : 'light'
    );
  }
}
