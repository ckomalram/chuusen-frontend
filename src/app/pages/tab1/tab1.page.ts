import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonList } from '@ionic/angular';

import { SorteoService } from '../../services/sorteo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild(IonList) ionlist!: IonList;

  codigo = null;



  constructor(public sorteoServices: SorteoService,
    private router: Router) {

    }


    ngOnInit() {
      this.sorteoServices.getChuusenList();
    }
  navigateTo(url: string){
    this.router.navigate([url]);
  }

  validarCodigo(){
    console.log(this.codigo);
  }

  share(sorteo: any){
    console.log(sorteo);
    this.ionlist.closeSlidingItems();
  }

  delete(sorteo: any){
    console.log(sorteo);
    this.ionlist.closeSlidingItems();
  }

}
