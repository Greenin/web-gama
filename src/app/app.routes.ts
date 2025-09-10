import { Routes } from '@angular/router';
import { UneteMisionesComponent } from './layouts/unete-misiones/unete-misiones.component';
import { HomeComponent } from './layouts/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, 
  },
  {
    path: 'unete-misiones',
    component: UneteMisionesComponent, 
  },

    // { path: '**', redirectTo: '' } // Redirección por defecto
  ];
