import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'animales', component: AnimalesComponent },
  { path: 'nuevo', component: AnimalFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
