import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chuusen-info',
  templateUrl: './chuusen-info.page.html',
  styleUrls: ['./chuusen-info.page.scss'],
})
export class ChuusenInfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(url: string){
    this.router.navigate([url]);
  }

}
