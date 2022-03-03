import { Injectable } from '@angular/core';
import {Book} from "../model/Book";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  showTours: Book[] =[];


  constructor(private http:HttpClient) {
  }

  findAll(): Observable<Book[]>{
    return  this.http.get<Book[]>('http://localhost:3000/books')
  }

  findById(id:number): Observable<Book>{
    return  this.http.get<Book>('http://localhost:3000/books/'+id)
  }

  delete(id:number): Observable<void>{
    return  this.http.delete<void>(`http://localhost:3000/books/${id}`)
  }

  create(b: Book): Observable<any> {
    console.log(b)
    return  this.http.post('http://localhost:3000/books',b)
  }

  updateBook(books:Book):Observable<any> {
    return this.http.put('http://localhost:3000/books/'+books.id,books)
  }

  showDetails(id: number):Observable<Book> {
    return  this.http.get<Book>('http://localhost:3000/books/'+id)
  }
}
