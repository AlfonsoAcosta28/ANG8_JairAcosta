import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { book } from 'src/app/core/services/books.service';
import { UpdateBook } from 'src/state/books.actions';
import { BooksState } from 'src/state/books.state';
import * as bootstrap from 'bootstrap'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  @Select(BooksState.getBooks) books$!: Observable<book[]>;

  myForm!: FormGroup;
  isEditMode: boolean = false
  myModal !: bootstrap.Modal
  
  constructor(private store: Store, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.myModal = new bootstrap.Modal(<HTMLIFrameElement>document.getElementById('exampleModal'))
    this.myForm = this.fb.group({
      id: new FormControl(0),
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(0),
      status: new FormControl(false),
    });
  }
  getIniciales(book: book) {
    return book.name.charAt(0).toUpperCase();
  }

  editBook(book: book) {
    this.myModal.show()
    this.myForm.patchValue(book);
    this.isEditMode = true

  }

  EDBook(book: book) {
    let book1 = { ...book };
    book1.status = !book.status;
    this.store.dispatch(new UpdateBook(book1));
  }

  subBook(){
    if(this.isEditMode){
      this.store.dispatch(new UpdateBook(this.myForm.value))
    }
    // else{
    //   return ''
    // }
    this.myModal.hide()
    this.isEditMode = false 
  }
}
