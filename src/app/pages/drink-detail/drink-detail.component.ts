import { Drink, DrinkService } from './../../drink.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss'],
})
export class DrinkDetailComponent implements OnInit {
  drinks$: Observable<Drink[]>;

  constructor(private drinkService: DrinkService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.drinks$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.drinkService.getDrink(params.get('id')))
    );
  }
}
