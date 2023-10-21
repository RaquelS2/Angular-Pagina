import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricin',
  templateUrl: './card-pricin.component.html',
  styleUrls: ['./card-pricin.component.css']
})
export class CardPricinComponent implements OnInit {
 
  @Input()
  gameType:string ="Digital PS4"
  @Input()
  gamePrice:string="R$ 399,90"
  constructor() { }

  ngOnInit(): void {
  }

}
