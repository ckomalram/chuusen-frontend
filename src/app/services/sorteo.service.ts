import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chuusen } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SorteoService {

  chuusenList!: Chuusen[];

  constructor(private http: HttpClient) { }

  getChuusenList(){
    return this.http.get<Chuusen[]>('/assets/dummy/chuusen-list.json').subscribe(resp => {this.chuusenList = resp});
  }
}
