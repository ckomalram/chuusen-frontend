import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SorteoService } from '../../services/sorteo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {



  constructor(public sorteoServices: SorteoService,
    private router: Router) {}


    ngOnInit() {
      this.sorteoServices.getChuusenList();
    }
  navigateTo(url: string){
    this.router.navigate([url]);
  }

}
