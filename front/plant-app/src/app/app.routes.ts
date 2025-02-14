import { Routes } from '@angular/router';
import {AboutusComponent} from './aboutus/aboutus.component';
import {HomeComponent} from './home/home.component';
import {IndoorplantsComponent} from './indoorplants/indoorplants.component';
import {OutdoorplantsComponent} from './outdoorplants/outdoorplants.component';



export const routes: Routes = [
    {path: 'aboutus-component', component: AboutusComponent},
    {path: 'home-component', component: HomeComponent},
    {path: 'indoorplants-component', component: IndoorplantsComponent},
    {path: 'outdoorplants-component', component: OutdoorplantsComponent},
];
