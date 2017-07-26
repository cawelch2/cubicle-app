import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Cubicle } from './cubicle';

@Injectable()
export class CubicleService {
  private cubiclesUrl = 'api/cubicles';
  private headers = new Headers({'Content-Type': 'application/json'});
  cubicle: Cubicle;

  constructor(private http: Http) { }

  getCubicles(): Promise<Cubicle[]> {
    return this.http.get(this.cubiclesUrl)
              .toPromise()
              .then(response => response.json().data as Cubicle[])
              .catch(this.handleError);
  }

  getCubicle(id: number): Promise<Cubicle> {
    const url = `${this.cubiclesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Cubicle)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  create(name: string): Promise<Cubicle> {
    return this.http
      .post(this.cubiclesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Cubicle)
      .catch(this.handleError);
  }

  update(cubicle: Cubicle): Promise<Cubicle> {
    const url = `${this.cubiclesUrl}/${cubicle.id}`;
    this.cubicle.mon=cubicle.mon;
    this.cubicle.tues=cubicle.tues;
    this.cubicle.wed=cubicle.wed;
    this.cubicle.thurs=cubicle.thurs;
    this.cubicle.fri=cubicle.fri;
    return this.http
      .put(url, JSON.stringify(cubicle), {headers: this.headers})
      .toPromise()
      .then(() => cubicle)
      .catch(this.handleError);
  }
}