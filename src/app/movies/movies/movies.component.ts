import { Component, OnInit } from '@angular/core';

import { MoviesService } from './../movies.service';
import { Movie } from './../../shared/models/movie.model';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

    movies = [];
    movieFeatured: any;

    constructor(
        private moviesService: MoviesService
    ) { }

    ngOnInit(): void {
        // TODO: Trabalhar com models
        this.moviesService.list().subscribe(result => {
            this.movies = result.results;

            const movieIndex = Math.floor(Math.random() * 20);
            this.movieFeatured = result.results[movieIndex];
        });
    }

}
