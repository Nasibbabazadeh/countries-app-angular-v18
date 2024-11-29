import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CountriesComponent } from './components/countries/countries.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'countries',
                component: CountriesComponent
            },
            {
                path: '**',
                component: ErrorComponent

            }
        ]
    }
];
