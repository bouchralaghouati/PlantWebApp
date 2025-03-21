import { Routes } from '@angular/router';
import {AboutusComponent} from './aboutus/aboutus.component';
import {HomeComponent} from './home/home.component';
import {IndoorplantsComponent} from './indoorplants/indoorplants.component';
import {OutdoorplantsComponent} from './outdoorplants/outdoorplants.component';
import {LoginComponent} from './login/login.component';
import { AddplantFormComponent } from './addplant-form/addplant-form.component';




export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'aboutus-component', component: AboutusComponent},
    {path: 'indoorplants-component', component: IndoorplantsComponent},
    {path: 'outdoorplants-component', component: OutdoorplantsComponent},
    {path: 'login-component', component: LoginComponent},
    {path: 'addplant-form-component', component: AddplantFormComponent},
];
