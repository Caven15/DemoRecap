import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  myString : string = "Hello world !!!"
  myNumber : number = 23.3333333333333333
  myDate : Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
