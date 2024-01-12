import { Component, OnInit } from '@angular/core';
import { tache } from 'src/app/models/tache.model';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  // Créations de plusieur taches
  tache1 : tache = {
    id : 0,
    nom : "laver le linge",
    complet : false
  }

  tache2 : tache = {
    id : 1,
    nom : "laver la voiture",
    complet : true
  }

  tache3 : tache = {
    id : 2,
    nom : "Fait l'apéro",
    complet : false
  }

  tache4 : tache = {
    id : 3,
    nom : "Fait les courses",
    complet : true
  }

  // Ajout de toutes les taches au tableaux
  taches : tache[] = [this.tache1,this.tache2, this.tache3, this.tache4]


  constructor() { }

  ngOnInit(): void {
  }

  changerEtat(id : number) : void{
    // Inversion de l'état booléen de complet
    this.taches[id].complet = !this.taches[id].complet
  }
}
