import { Component, OnInit } from '@angular/core';
import { product } from '@core/interface/data-type';
import { SHARED_IMPORTS } from '@shared/common-import/shared.imports';

@Component({
  selector: 'app-seller-add-product',
  imports: [...SHARED_IMPORTS],
  templateUrl: './seller-add-product.html',
  styleUrl: './seller-add-product.scss',
})
export class SellerAddProduct implements OnInit {
  addProductMessage: string | undefined;
  //constructor(private product: ProductService) {}

  ngOnInit(): void {}

  submit(data: product) {
    // this.product.addProduct(data).subscribe((result:any) => {
    //   console.warn(result);
    //   if (result) {
    //     this.addProductMessage = 'Product is added successfully';
    //   }
    // });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
  }
}
