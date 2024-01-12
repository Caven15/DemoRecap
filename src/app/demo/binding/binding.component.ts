import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  // Property binding
  prenom : string = "Toto"
  prenom2 : string = ""

  // Event binding
  jour : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  // Méthodes
  changerJour(j : string) : void{
    this.jour = j
  }
}
