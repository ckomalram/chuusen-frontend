import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SorteoService } from 'src/app/services/sorteo.service';

@Component({
  selector: 'app-select-numbers',
  templateUrl: './select-numbers.page.html',
  styleUrls: ['./select-numbers.page.scss'],
})
export class SelectNumbersPage implements OnInit {
  numbers: any[] = [];
  limit: number = 100;

  constructor(private sorteoService: SorteoService, private router: Router) {}

  ngOnInit() {
// this.numbers = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//   21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
//   40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
//   59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
//   78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
//   97, 98, 99,
// ];
this.initNumbers();

    console.log(this.numbers);
  }

  toogleNumber(dataSelected: any, index: number){
    const number = this.numbers.find((number,index)=> number.value === dataSelected.value);

    console.log(number);

    if (number.selected) {
      this.numbers[index].selected = false;
    }else{
      this.numbers[index].selected = true;
    }
  }

  continuar(){
    console.log(this.numbers);

    const dataNumbers = this.numbers.filter(value =>value.selected === true);
    const dataTicket = {
      numbers: dataNumbers,
      user: {},
      sorteo: {}
    }
    console.log(dataTicket);

    this.sorteoService.saveChuusenNumbers(dataTicket);

    this.router.navigate(['/chuusen-reserve']);
  }

  initNumbers(){
    this.numbers = [];
    for (let index = 0; index < 100; index++) {

      this.numbers.push({
        value: index,
        selected: false,
       state: true,

        // user: {},
        quantity: 4
      })
    }
  }

  clearNumbersSelected(){
    this.initNumbers();
  }
}
