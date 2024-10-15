import { Routes } from '@angular/router';
import { MainAppComponent } from './src/main-app.component';
import { DashboardComponent } from './src/core/dashboard/dashboard.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    component: MainAppComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users',
        loadComponent: () =>
          loadRemoteModule('users-angular-17', './Component').then(
            (m) => m.AppComponent
          ),
      },
    ],
  },
];
