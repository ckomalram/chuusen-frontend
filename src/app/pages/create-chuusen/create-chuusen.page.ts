import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-chuusen',
  templateUrl: './create-chuusen.page.html',
  styleUrls: ['./create-chuusen.page.scss'],
})
export class CreateChuusenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    // return `${maxLength - inputLength} characters remaining`;
     `${maxLength - inputLength} characters remaining`;
  }

  continuar(){
    console.log('Guardando sorteo...');
  }

  cancelar(){
    console.log('Cancelar creación de sorteo...');
  }


}
