import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SorteoService } from 'src/app/services/sorteo.service';

@Component({
  selector: 'app-chuusen-confirm',
  templateUrl: './chuusen-confirm.page.html',
  styleUrls: ['./chuusen-confirm.page.scss'],
})
export class ChuusenConfirmPage implements OnInit {

  constructor(public sorteoService: SorteoService, private router: Router) { }

  ngOnInit() {
  }

  returnInicio(){
    this.router.navigate(['/tabs/tab1']);
  }

}
