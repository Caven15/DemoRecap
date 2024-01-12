import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  addForm! : FormGroup

  constructor(
    public _formBuilder : FormBuilder

  ) { }

  ngOnInit(): void {
    this.addForm = this._formBuilder.group({
      nom : [null, Validators.required],
      description : [null, Validators.required],
      email : [null, [Validators.required, Validators.email]],
    })
  }

  submitForm() : void {
    const form = this.addForm.value
    console.log(form['nom'])
    console.log(form['description'])
    console.log(form['email'])
  }
}
