import { Component, OnInit } from '@angular/core';
import { IProduct } from "../../models/Product";
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  // dropDownList: any;
  products!: IProduct[]
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getProductList();
  }
  getProductList() {
    this.productService.getProductList().subscribe((data) => {
      console.log('data', data);
      this.products = data;
    });

  }
  onHandleRemove(id: number) {
    this.productService.removeProduct(id).subscribe(() => {
      this.products = this.products.filter((item) => item.id !== id);
    });
  }

}
