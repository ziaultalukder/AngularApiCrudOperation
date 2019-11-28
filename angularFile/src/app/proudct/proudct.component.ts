import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';
import { Product } from '../Product';


@Component({
  selector: 'app-proudct',
  templateUrl: './proudct.component.html',
  styles: []
})
export class ProudctComponent implements OnInit {
  
  constructor(private service: ProductService) { }
  
  @Input() objemp :Product=new Product();
  products: Product[];

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.service.addProduct(form.value).subscribe(prod => this.products.push(prod));
  }

}
