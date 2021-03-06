import { Injectable } from '@angular/core';

import { Actor } from './actor';
// import { ACTORS } from './mock-actors';
import { Http, Response, Headers } from '@angular/http';
import { Observable }               from 'rxjs/Observable';

@Injectable()
export class ActorService {

  constructor(private http:Http){
  }
 
  private headers = new Headers({ 'Content-Type': 'application/json' });  
  // private baseUrl: string   = this.baseUrl + "/actor"; 
  private baseUrl: string   = "http://http://localhost:8082/api" + "/actor"; 

  // getActorById(id: number): Observable<Actor> {
  //     return this.http.get(this.baseUrl+"/" + id).map(res => res.json());
  //   }
  // getActors(): Observable<Actor[]> {
  //   return this.http.get(this.baseUrl).map(res => res.json());
  // }
  // getActor(): Promise<Actor[]> {
  //   return Promise.resolve(ACTORS);
  // }
  getActors(){
    return this.http.get(this.baseUrl)
    .map(res => <Actor[]>res.json());
  }
}