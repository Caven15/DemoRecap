import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  baseUrlPokemon : string = "https://pokeapi.co/api/v2/pokemon/"

  constructor(
    private _httpCLient : HttpClient
  ) { }

  getById(idPokmeon : number) : Observable<any>{
    return this._httpCLient.get<any>(`${this.baseUrlPokemon}${idPokmeon}`)
  }
}
