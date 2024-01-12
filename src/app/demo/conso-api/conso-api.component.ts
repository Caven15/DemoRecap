import { Component, OnInit } from '@angular/core';
import { pokemon } from 'src/app/models/pokemon';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-conso-api',
  templateUrl: './conso-api.component.html',
  styleUrls: ['./conso-api.component.scss']
})
export class ConsoApiComponent implements OnInit {

  found : boolean = false
  currentPokemon! : pokemon

  constructor(private _pokeApi : PokeApiService) { }

  ngOnInit(): void {
    this._pokeApi.getById(2).subscribe({
      // à la récupération de valeur
      next : (data) =>{
        console.log(data)
        this.currentPokemon = {
          height : data.height,
          name : data.name,
          weight : data.weight
        }
      },
      // si j'ai une erreur
      error : (error) =>{
        console.log(error)
      },
      complete : () => {
        console.log("Subscribe pokemon terminé !")
        this.found = !this.found
      }
    })
  }

}
