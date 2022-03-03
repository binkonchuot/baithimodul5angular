import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service/service.service";
import {Book} from "../model/Book";

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  showBooks: Book[] =[];
  showBook:Book = new Book(0, '', '', '')

  constructor(private bookService:ServiceService) {
  }

  findAll(){
    this.bookService.findAll().subscribe((data) =>{
      this.showBooks = data;
    })
  }

  ngOnInit(): void {
    this.findAll();
  }
  DeleteBook(id: number) {
    this.bookService.delete(id).subscribe(()=>{
      alert("Delete Successfully!")
      this.findAll();
    })
  }

  showEdit(b: Book) {
    this.bookService.findById(b.id).subscribe((data)=>{
      this.showBook = data
    })
  }

  CreateBook(b: Book) {
    this.bookService.create(b).subscribe(() =>{
      alert("Create Successfully!")
      this.resetInput()
      this.findAll();
    })
  }

  UpdateBook(b: Book) {
    this.bookService.updateBook(b).subscribe(() =>{
      alert("Update Successfully!")
      this.resetInput()
      this.findAll();
    })
  }
  resetInput(){
    this.showBook =new Book(0, '', '', '')
  }

  showDetails(b: Book) {
    this.bookService.findById(b.id).subscribe((data)=>{
      this.showBook = data
    })
  }
}
