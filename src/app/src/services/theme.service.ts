import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type Theme = 'yellow' | 'green' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme$: Subject<Theme> = new Subject();
}
