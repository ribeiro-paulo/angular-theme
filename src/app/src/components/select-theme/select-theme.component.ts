import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Theme, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-select-theme',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, MatButtonModule],
  templateUrl: './select-theme.component.html',
  styleUrl: './select-theme.component.scss',
})
export class SelectThemeComponent {
  constructor(private themeService: ThemeService) {}

  changeTheme(theme: Theme): void {
    this.themeService.theme$.next(theme);
  }
}
