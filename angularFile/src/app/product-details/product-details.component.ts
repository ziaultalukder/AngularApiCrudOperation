import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  List: Product[];
  LoadAllProduct(){
    this.productService.productList().subscribe(prod => this.List = prod);
  }

  ngOnInit() {
    this.LoadAllProduct();
  }

}
