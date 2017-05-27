import { Injectable } from '@angular/core';

import { DVD } from './dvd';
import { Http, Response, Headers } from '@angular/http';
import { Observable }               from 'rxjs/Observable';

@Injectable()
export class DVDService {

  constructor(private http:Http){
  }
 
  private headers = new Headers({ 'Content-Type': 'application/json' });  
  // private baseUrl: string   = this.baseUrl + "/dvd"; 
  private baseUrl: string   = "http://http://localhost:8082/api" + "/dvd"; 

  // getDVDById(id: number): Observable<DVD> {
  //     return this.http.get(this.baseUrl+"/" + id).map(res => res.json());
  //   }
  // getDVDs(): Observable<DVD[]> {
  //   return this.http.get(this.baseUrl).map(res => res.json());
  // }
  // getDVD(): Promise<DVD[]> {
  //   return Promise.resolve(DVDS);
  // }
  getDVDs(){
    return this.http.get(this.baseUrl)
    .map(res => <DVD[]>res.json());
  }
}