import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'champions',
        loadChildren: () => import('./champions/champions.routes').then(m => m.championsRoutes)
    }
];
