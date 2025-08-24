import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SwimmingComponent } from './swimming/swimming.component';
import { GizaComponent } from './giza/giza.component';
import { AlexComponent } from './alex/alex.component';
import { AppComponent } from './app.component';
import { KiaComponent } from './kia/kia.component';
import { BmwComponent } from './bmw/bmw.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent, title:'Home Page', 
        children: [
            {path:'kia', component:KiaComponent},
            // {path:'',  redirectTo:'about', pathMatch:'full'},
            {path:'bmw', component:BmwComponent },

        ]
    },
    {path:'',  redirectTo:'home', pathMatch:'full'},

    {path: 'alex', component:AlexComponent, title:'Alex Page'},
    {path:'giza', component:GizaComponent, title:'Giza Page'},

    {path:'**', component:SwimmingComponent, title:'Swimming Page'},

];
