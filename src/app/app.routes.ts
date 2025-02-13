import { Routes } from '@angular/router';
import { UneteMisionesComponent } from './components/unete-misiones/unete-misiones.component';
import { UneteMisionesPageComponent } from './components/unete-misiones-page/unete-misiones-page.component';

export const routes: Routes = [
  {
    path: 'unete-misiones',
    component: UneteMisionesPageComponent, // Usa el nuevo layout
    children: [{ path: '', component: UneteMisionesComponent }]
  },
    // { path: '**', redirectTo: '' } // Redirección por defecto
  ];
