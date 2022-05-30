import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/Product';
import { ProductService } from '../../services/product.service';

import { ColumnItem } from '../../models/columnItem';
import { DataItem } from '../../models/dataItem';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products!: IProduct[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // chạy
    this.getProductList();
  }

  // khai báo
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
  listOfData: IProduct[] = this.products;

  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filterFn: (list: string[], item: DataItem) =>
        list.some((name) => item.name.indexOf(name) !== -1),
    },
    {
      name: 'Price',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.age - b.age,
      listOfFilter: [],
      filterFn: null,
    },
    {
      name: 'Status',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' },
      ],
      filterFn: (address: string, item: DataItem) =>
        item.address.indexOf(address) !== -1,
    },
   
  ];
  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }
}
