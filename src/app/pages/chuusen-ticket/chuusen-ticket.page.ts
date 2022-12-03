import { Component, OnInit } from '@angular/core';
import { SorteoService } from 'src/app/services/sorteo.service';

@Component({
  selector: 'app-chuusen-ticket',
  templateUrl: './chuusen-ticket.page.html',
  styleUrls: ['./chuusen-ticket.page.scss'],
})
export class ChuusenTicketPage implements OnInit {

  constructor(public sorteoService: SorteoService,) { }

  ngOnInit() {
  }

}
