import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private api: ApiService, private route:Router) { }
  productCode = ""
  productName = ""
  manufacturingDate = ""
  expiryDate = ""
  brand = ""
  price = ""
  sellerName = ""
  distributorName = ""

  readValue = () => {
    let product: any =
    {
      "productCode": this.productCode,
      "productName": this.productName,
      "manufacturingDate": this.manufacturingDate,
      "expiryDate": this.expiryDate,
      "brand": this.brand,
      "price": this.price,
      "sellerName": this.sellerName,
      "distributorName": this.distributorName
    }
    this.api.sendData(product).subscribe(
      (response) => {

      }
    )
    this.productCode = ""
    this.productName = ""
    this.manufacturingDate = ""
    this.expiryDate = ""
    this.brand = ""
    this.price = ""
    this.sellerName = ""
    this.distributorName = ""
    this.route.navigate(["/"])
    console.log(product)
  }
}