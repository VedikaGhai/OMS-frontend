import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderbook',
  templateUrl: './orderbook.component.html',
  styleUrls: ['./orderbook.component.css']
})
export class OrderbookComponent implements OnInit {

  clickMessage = '';
  parentMessage = false;


  constructor() { }

  ngOnInit() {
  }

  onClickMe() {
    this.parentMessage = true;
  }
}
