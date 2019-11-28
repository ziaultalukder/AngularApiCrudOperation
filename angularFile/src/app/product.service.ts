import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Product } from './Product';
import { catchError, map, tap } from 'rxjs/operators';
import {MessagesService} from './messages.service'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productModel: Product;

  constructor(private http: HttpClient, private messageService: MessagesService ) { }
  
  
  private rootUrl='http://localhost:13955/api/Product';
  private saveUrl='http://localhost:13955/api/Product/PostProduct';

  productList(): Observable<Product[]>{
    return this.http.get<Product[]>(this.rootUrl);
  }

  saveProduct(product : Product):Observable<Product>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }
    return this.http.post<Product>(this.saveUrl, product, httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  private log(message: string) {
    this.messageService.Add(`HeroService: ${message}`);
  }
  
  httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }

  addProduct (prod: Product): Observable<Product> {    
    return this.http.post<Product>(this.saveUrl, prod, this.httpOption).pipe(
      tap((newproduct: Product) => this.log(`added product w/ Id=${newproduct.Id}`)),
      catchError(this.handleError<Product>('newproduct'))
    );
  }

}
