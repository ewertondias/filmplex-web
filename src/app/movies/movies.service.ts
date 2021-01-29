import { Pageable } from './../shared/pageable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Movie } from './../shared/models/movie.model';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    private moviesUrl: string;

    constructor(private http: HttpClient) {
        this.moviesUrl = 'http://localhost:8080/movies';
    }

    // TODO: Colocar url no property
    list(): Observable<any>{
        return this.http.get<any>(this.moviesUrl)
            .pipe(
                catchError(err => {
                    return throwError(err);
                })
            );
    }

    getById(idMovie: string): Observable<any>{
        return this.http.get<any>(`${this.moviesUrl}/${idMovie}`)
            .pipe(
                catchError(err => {
                    return throwError(err);
                })
            );
    }

}
