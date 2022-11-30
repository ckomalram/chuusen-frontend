import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chuusen } from '../../interface/interfaces';
import { ChuusenService } from '../../services/chuusen.service';
import { SorteoService } from '../../services/sorteo.service';

@Component({
  selector: 'app-create-chuusen',
  templateUrl: './create-chuusen.page.html',
  styleUrls: ['./create-chuusen.page.scss'],
})
export class CreateChuusenPage implements OnInit {


  constructor(private sorteoServices: SorteoService , private router: Router) { }

  ngOnInit() {
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    // return `${maxLength - inputLength} characters remaining`;
     `${maxLength - inputLength} characters remaining`;
  }

  continuar(){
    const newChuusen: Chuusen =   {
      name: "sorteo basket",
      user: "ckomalram",
      numbers: [
        {
          value: 0,
          selected: false,
          state: true,
          quantity: 4
        },
        {
          value: 1,
          selected: false,
          state: true,
          quantity: 4
        },
        {
          value: 2,
          selected: false,
          state: true,
          quantity: 4
        },
        {
          value: 3,
          selected: false,
          state: true,
          quantity: 4
        },
        {
          value: 4,
          selected: false,
          state: true,
          quantity: 4
        }
      ],
      fraction: 4,
      quota: 0.25,
      code: "FantasmaDeSparta",
      state: true,
      startdate: "11/29/2022",
      duedate: "12/23/2022",
      deletedate:null
    }

    this.sorteoServices.chuusenList.push(newChuusen);

    this.router.navigate(['/tabs/tab1'])
  }

  cancelar(){
    console.log('Cancelar creación de sorteo...');
  }


}
