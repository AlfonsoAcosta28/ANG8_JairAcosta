import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
 
  books : book[]= [
    {
      id: 0, 
      name: "Cocina con sabor", 
      description: "Recetario de cocina Mexicana de norte a sur", 
      price: 100,
      status: true
    },
    {
      id: 1,
      name: "Cien años de soledad",
      description: "Una obra maestra de la literatura latinoamericana que narra la historia de la familia Buendía en el pueblo ficticio de Macondo.",
      price: 20,
      status: true
    },
    {
      id: 2,
      name: "El Hobbit",
      description: "Una emocionante aventura que sigue al hobbit Bilbo Bolsón mientras se embarca en un viaje épico para recuperar un tesoro robado.",
      price: 15,
      status: true
    },
    {
      id: 3,
      name: "1984",
      description: "Una novela distópica que retrata un futuro totalitario en el que el gobierno controla todos los aspectos de la vida de las personas.",
      price: 18,
      status: false
    },
    {
      id: 4,
      name: "Matar un ruiseñor",
      description: "Una conmovedora historia sobre la justicia y el racismo en el sur de Estados Unidos, narrada a través de los ojos de la joven Scout Finch.",
      price: 22,
      status: false
    },
    {
      id: 5,
      name: "Los pilares de la Tierra",
      description: "Una epopeya histórica que sigue la construcción de una catedral en la Inglaterra medieval y las vidas de quienes la rodean.",
      price: 25,
      status: true
    }
  ];
  
  constructor() { 
  }

  getBooks():Observable<book[]>{
    return of(this.books)
  }

  addBook(book:book):Observable<book[]>{
    this.books = [...this.books, book]
    return of(this.books)
  }

  updateBook(book:book):Observable<book[]>{
    this.books = this.books.filter(bk => bk.id != book.id)
    this.books.push(book)
    return of(this.books)

  }

  deleteBook(book:book):Observable<book[]>{
    this.books = this.books.filter(bk => bk.id != book.id)
    return of(this.books)

  }

  getBook(id:number):Observable<book>{
    const book = this.books.find(bk => bk.id == id)
    if(!!book)
      return of(book)
    else
      return of()
  }
}

export interface book{
  id:number;
  name:string;
  description: string;
  price: number;
  status:boolean;
}
