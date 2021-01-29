import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { SafeUrlPipe } from './../shared/pipes/safe-url.pipe';

@NgModule({
    declarations: [
        MoviesComponent,
        MoviesDetailsComponent,
        SafeUrlPipe
    ],
    imports: [
        CommonModule,
        MoviesRoutingModule
    ],
    exports: [
        SafeUrlPipe
    ]
})
export class MoviesModule { }
