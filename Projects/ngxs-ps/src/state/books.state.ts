import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddBooks, LoadBooks, UpdateBook } from './books.actions';
import { BooksService, book } from 'src/app/core/services/books.service';
import { Observable, tap } from 'rxjs';

export class BooksStateModel {
  public books!: book[];
}

const defaults = {
  books: []
};

@State<BooksStateModel>({
  name: 'statebooks',
  defaults
})
@Injectable()
export class BooksState {
  constructor(private bks:BooksService){  }
  @Selector()
  public static getBooks({books}:BooksStateModel):book[]{
    return books
  }
  @Action(AddBooks)
  add({ getState, setState }: StateContext<BooksStateModel>, { payload }: AddBooks) {
    const state = getState();
    setState({ books: [ ...state.books, payload ] });
  }

  @Action(LoadBooks)
  loadBooks({ getState, setState }: StateContext<BooksStateModel>): Observable<book[]>{
    return this.bks.getBooks().pipe(
      tap((books: book[]) => {
        const state = getState();
        setState({ ...state, books });
      })
    );
  }


  @Action(UpdateBook)
  updateBook({ getState, setState }: StateContext<BooksStateModel>, {payload}: UpdateBook){
    const state = getState();
    let filter = state.books.filter(book => book.id != payload.id)
    setState({books:[...filter, payload]})
    
  }
}
