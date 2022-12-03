import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chuusen, ChuusenReserveData, ChuusenConfirmData } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SorteoService {

  public dataReserve: ChuusenReserveData;
  public dataTicket: ChuusenConfirmData;

  chuusenList!: Chuusen[];

  constructor(private http: HttpClient) {
    this.dataReserve = { numbers: [
     { value: 0, selected: true, state: true, quantity: 4},
     {value: 18, selected: true, state: true, quantity: 4},
     {value: 69, selected: true, state: true, quantity: 4},
    ] , sorteo: {}, user:{}};
    this.dataTicket = {
      numbers: this.dataReserve?.numbers,
      sorteo: this.dataReserve?.sorteo,
      user: this.dataReserve?.user,
      ticket: '123456789000',
      state: true,
      stage: 'pendiente',
      total: 4.50,
      fechacreado: '12/03/2022'
    };
   }

  getChuusenList(){
    return this.http.get<Chuusen[]>('/assets/dummy/chuusen-list.json').subscribe(resp => {this.chuusenList = resp});
  }

  saveChuusenNumbers(dataReserve: ChuusenReserveData){
     this.dataReserve = dataReserve;
  }

  confirmTicket(data:  ChuusenConfirmData){
    this.dataTicket = data;
  }
}
