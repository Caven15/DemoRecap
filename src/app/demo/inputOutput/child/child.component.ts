import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // Input => Recevoir des données du composant parent
  @Input() messageFromParent : string = ""

  // Output => Émettre des donnée ver le composant parent
  @Output() messageToParent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent(){
    this.messageToParent.emit("Coucou, je viens de l'enfant.")
  }
}
