import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators, FormGroup } from "@angular/forms";
import { Chuusen } from '../../interface/interfaces';
import { SorteoService } from '../../services/sorteo.service';
import * as moment from 'moment';

@Component({
  selector: 'app-create-chuusen',
  templateUrl: './create-chuusen.page.html',
  styleUrls: ['./create-chuusen.page.scss'],
})
export class CreateChuusenPage implements OnInit {
  public chuusenForm: FormGroup;
 currentMomentDate = moment();
  // currentMomentDate.format(); // "2014-09-08T08:02:17-05:00"
  // currentDate = new Date().toISOString();



  constructor(private sorteoServices: SorteoService , private router: Router, private fb: FormBuilder) {
    this.chuusenForm = this.fb.group({});
   }

  ngOnInit() {
    this.chuusenForm = this.fb.group({
      name: ['sorteo 123', Validators.required],
      user: ['testuser', Validators.required],
      numeros: [99, [Validators.required,Validators.max(99), Validators.min(0)]],
      fracciones: [4, [Validators.required,Validators.max(20), Validators.min(4)]],
      cuota: [0.25, [Validators.required,Validators.max(1), Validators.min(0)]],
      estado: [true],
      apertura: [this.currentMomentDate.format(), Validators.required],
      cierre: [this.currentMomentDate.format(), Validators.required],
      customcod: [false],
      codigo: ['',[Validators.maxLength(20), Validators.minLength(4)]]
    });

    this.chuusenForm.controls["user"].disable();
    this.chuusenForm.controls["estado"].disable();
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    // return `${maxLength - inputLength} characters remaining`;
     `${maxLength - inputLength} characters remaining`;
  }

  continuar(){

    console.log(this.chuusenForm);
    // console.log(this.chuusenForm.controls["customcod"].value);
    // console.log(this.currentDate);
    // const newChuusen: Chuusen =   {
    //   name: "sorteo basket",
    //   user: "ckomalram",
    //   numbers: [
    //     {
    //       value: 0,
    //       selected: false,
    //       state: true,
    //       quantity: 4
    //     },
    //     {
    //       value: 1,
    //       selected: false,
    //       state: true,
    //       quantity: 4
    //     },
    //     {
    //       value: 2,
    //       selected: false,
    //       state: true,
    //       quantity: 4
    //     },
    //     {
    //       value: 3,
    //       selected: false,
    //       state: true,
    //       quantity: 4
    //     },
    //     {
    //       value: 4,
    //       selected: false,
    //       state: true,
    //       quantity: 4
    //     }
    //   ],
    //   fraction: 4,
    //   quota: 0.25,
    //   code: "FantasmaDeSparta",
    //   state: true,
    //   startdate: "11/29/2022",
    //   duedate: "12/23/2022",
    //   deletedate:null
    // }

    // this.sorteoServices.chuusenList.push(newChuusen);

    // this.router.navigate(['/tabs/tab1'])
  }

  cancelar(){
    console.log('Cancelar creación de sorteo...');
  }


}
