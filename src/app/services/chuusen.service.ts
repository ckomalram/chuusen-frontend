import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MenuPoints } from '../interface/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ChuusenService {
    //menus!: Observable<MenuPoints[]>;
    menus!: MenuPoints[];

  constructor(private http: HttpClient) { }

  getMenuPoints(){
    return this.http.get<MenuPoints[]>('/assets/dummy/menu-points.json').subscribe(resp => {this.menus = resp});
  }
}
