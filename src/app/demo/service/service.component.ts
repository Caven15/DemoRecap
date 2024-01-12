import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  public books : string[] = []

  newBook : string = "test"

  constructor(private _bookService : BookServiceService) { }

  ngOnInit(): void {
    this.books = this._bookService.getBooks()
  }

  removeBook(index : number) : void{
    this._bookService.removeBook(index)
  }

  addNewBook() : void{
    this._bookService.addBook(this.newBook)
  }
}
