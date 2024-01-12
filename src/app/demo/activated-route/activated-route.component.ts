import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activated-route',
  templateUrl: './activated-route.component.html',
  styleUrls: ['./activated-route.component.scss']
})
export class ActivatedRouteComponent implements OnInit {

  idUser! : number

  constructor(
    // Permettre al récupération de paramètre depuis la route active
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Récupération a l'initialisation
    this.idUser = this._activatedRoute.snapshot.params['id']
  }
}
