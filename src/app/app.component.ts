import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CustomTableComponent } from './src/components/custom-table/custom-table.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainAppComponent } from './src/main-app.component';
import { Theme, ThemeService } from './src/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    CustomTableComponent,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MainAppComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  theme$: Observable<Theme>;

  constructor(themeService: ThemeService) {
    this.theme$ = themeService.theme$.asObservable();
  }
}
