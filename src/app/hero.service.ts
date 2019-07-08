import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class HeroService {
private heroesUrl = 'api/heroes';
  constructor(private http: HttpClient, private messageService: MessageService) { }

//   getHeroes(): Hero[] {
//     return HEROES;
//   }
getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES); //uses RxJS of() to get mock heroes
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
        tap(_ => this.log('fetched heroes')),
            catchError(this.handleError<Hero[]>('getHeroes', []))
        );
  }

  getHero(id: number): Observable<Hero> {
    // this.log(` fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));

    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>('getHero id=${id}'))
    );
  }

 private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
