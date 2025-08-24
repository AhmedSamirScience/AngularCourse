import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SwimmingComponent } from './swimming/swimming.component';
import { GizaComponent } from './giza/giza.component';
import { AlexComponent } from './alex/alex.component';

export const routes: Routes = [
    {path: 'alex', component:AlexComponent},
    {path:'about', component:GizaComponent}
];
