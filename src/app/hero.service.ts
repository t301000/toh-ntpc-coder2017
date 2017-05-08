import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class HeroService {
  baseUrl = '/api/heroes';

  constructor(private http: Http) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.baseUrl)
              .map((res: Response) => res.json().data || {})
              .catch(this.handleError);
  }

  addHero(name: string): Observable<Hero> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({headers});
    return this.http.post(this.baseUrl, {name}, options)
              .map((res: Response) => res.json().data)
              .catch(this.handleError);
  }

  deleteHero(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
              .map((res: Response) => null)
              .catch(this.handleError);
  }

  private handleError(error: Response | any): Observable<any> {
    // console.log(error);
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
