import { Drink, DrinkService } from './../../drink.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {
  drinks$: Observable<Drink[]>;

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    this.drinks$ = this.drinkService.getDrinks();
  }
}
