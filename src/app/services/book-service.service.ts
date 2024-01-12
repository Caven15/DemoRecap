import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private _books : string[] = [
    "Contes",
    "La saga de Njáll le Brûlé",
    "Harry potter",
    "Hobbit",
    "Le Seigneur des anneaux"
  ]
  constructor() { }


  // GetAll
  public getBooks() :string[]{
    return this._books
  }

  // Add
  public addBook(newBook : string) :void{
    this._books.push(newBook)
  }

  // Delete
  public removeBook(index : number) : void{
    if (index >= 0 && index < this._books.length) {
      this._books.splice(index, 1)
    }
  }
}
