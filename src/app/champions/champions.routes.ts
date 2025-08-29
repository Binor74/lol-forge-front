import { Routes } from "@angular/router";

export const championsRoutes: Routes  = [
    {
        'path': '',
        'loadComponent': () => import('./champions-list-page/champions-list-page.component').then(c => c.ChampionsListPageComponent)
    }
];