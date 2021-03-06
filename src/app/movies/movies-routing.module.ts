import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
    {
        path: '',
        component: MoviesComponent
    },
    {
        path: ':id',
        component: MoviesDetailsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MoviesRoutingModule { }
