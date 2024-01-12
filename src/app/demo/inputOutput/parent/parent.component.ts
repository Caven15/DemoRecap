import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  // Message à passer au composant enfant
  message : string = "Coucou, je viens du parent !"

  // Variable pour stocker le message envoyé par le composant enfant
  messageRecu : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  handleMessage(message : string){
    this.messageRecu = message
  }
}
