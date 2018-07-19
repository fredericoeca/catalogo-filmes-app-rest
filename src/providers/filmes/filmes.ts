import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class FilmesProvider {

  public url : any = 'http://localhost:3000';

  constructor(
    public http: Http
  ) {}

  // Lista de filmes
  getFilmes(): Observable<any> {
    return this.http.get(this.url + '/filmes')
    .map( res => res.json())
    .catch( err => Observable.throw(err.message))
  }

  // Carregar Filme
  getFilme(id): Observable<any> {
    return this.http.get(this.url + '/filmes/' + id)
    .map( res => res.json())
    .catch( err => Observable.throw(err.message))
  }

}
