import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesModule } from './movies/movies.module';

const routes: Routes = [
    { path: 'movies', loadChildren: () => MoviesModule },
    { path: '', redirectTo: 'movies', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
