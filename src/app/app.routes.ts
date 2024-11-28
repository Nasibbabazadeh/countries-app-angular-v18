import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'countries',
        component: CountriesComponent
    }
];
