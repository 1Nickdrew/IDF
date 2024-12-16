import { Routes } from '@angular/router';
import { IdfHomepageComponent } from './pages/idf-homepage/idf-homepage.component';
import { IdfNotFoundComponent } from './pages/idf-not-found/idf-not-found.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},{
    path: 'home',
    component:IdfHomepageComponent
},{
    path: '**',
    component:IdfNotFoundComponent
}];
