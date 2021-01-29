import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from './../movies.service';

@Component({
    selector: 'app-movies-details',
    templateUrl: './movies-details.component.html',
    styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

    movie = null; // TODO: Colocar model especifica

    constructor(
        private route: ActivatedRoute,
        private moviesService: MoviesService
    ) { }

    ngOnInit(): void {
        const idMovie = this.route.snapshot.paramMap.get('id');

        if (idMovie !== undefined) {
            this.moviesService.getById(idMovie).subscribe(movie => {
                console.log(movie);
                this.movie = movie;
                this.movie.listGenres = movie.genres.map(genre => genre.name).join(', ');

                if (movie.videos.results.length > 0) {
                    const videoKey = movie.videos.results[0].key;
                    this.movie.videoUrl = 'https://www.youtube.com/embed/' + videoKey + '?controls=0&autoplay=0';
                }

                this.movie.releaseDate = movie.release_date.split('-')[0];
            });
        }
    }

}
