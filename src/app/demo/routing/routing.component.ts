import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  idUser! : number

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  redirectToBook() : void{
    this._router.navigate(['service'])
  }

  redirectToProfil() : void{
    if (this.idUser) {
      this._router.navigate(['activatedRoute/'+this.idUser])
    }
  }
}
