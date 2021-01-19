import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
  apiUrl2 = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  constructor(private http: HttpClient) {}

  getDrinks(): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.apiUrl).pipe(pluck('drinks'));
  }

  getDrink(id: string): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.apiUrl2 + id).pipe(pluck('drinks'));
  }
}
