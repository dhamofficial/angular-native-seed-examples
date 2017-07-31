import { Routes } from '@angular/router';
// app
import { HomeComponent } from './components/home/home.component';
import { SimpleComponent } from '../simple/simple.component';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'simple',
        component: SimpleComponent
    },
    {
        path: 'about',
        loadChildren: 'app/+about/about.module#AboutModule'
    },
    {
        path: 'lazy',
        loadChildren: 'app/lazy-cat/lazy-cat.module#LazyCatModule'
    },
    {
        path: 'infinite',
        loadChildren: 'app/infinite/infinite.module#InfiniteModule'
    }
];
