import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChuusenReserveData } from 'src/app/interface/interfaces';
import { SorteoService } from '../../services/sorteo.service';
import { ChuusenConfirmData } from '../../interface/interfaces';

@Component({
  selector: 'app-chuusen-reserve',
  templateUrl: './chuusen-reserve.page.html',
  styleUrls: ['./chuusen-reserve.page.scss'],
})
export class ChuusenReservePage implements OnInit {
  dataReserve?: ChuusenReserveData;
  constructor(private sorteoService: SorteoService, private router: Router) { }

  ngOnInit() {
    this.dataReserve= this.sorteoService.dataReserve;
    console.log(this.dataReserve);
  }

  confirmar(){
    const newDataTicket: ChuusenConfirmData = {
      numbers: this.dataReserve?.numbers,
      sorteo: this.dataReserve?.sorteo,
      user: this.dataReserve?.user,
      ticket: '123456789000',
      state: true,
      stage: 'pendiente',
      total: 4.50,
      fechacreado: '12/03/2022'
    };

    this.sorteoService.confirmTicket(newDataTicket);
    this.router.navigate(['/chuusen-confirm']);
  }

}
