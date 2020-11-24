import { identifierModuleUrl } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import * as data from "./data.json";

@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.css"],
})
export class CartPageComponent implements OnInit {
  orderData = [];
  items;
  count: number;
  totalItem: number = 0;
  totalPrice: number = 0;
  updatedPrice = 0;
  discount: number = 4;
  constructor(private ngx: ToastrService) {
    this.orderData = [...data.Data];
    this.count = this.orderData.length;
    console.log(this.orderData);
  }

  ngOnInit() {
    this.getTotalPrice();
  }

  getTotalPrice() {
    for (var i = 0; i < this.orderData.length; i++) {
      this.totalPrice += this.orderData[i].price;
    }
    console.log(this.totalPrice);
  }

  addItem(id: number) {
    const item = this.orderData.findIndex((x) => x.id === id);
    this.orderData[item].item += 1;
    this.count += 1;
    this.updatedPrice = this.orderData[item].price;
    console.log(this.updatedPrice);
    this.totalPrice = this.totalPrice + this.updatedPrice;
    this.updatedPrice = 0;
  }

  removeItem(id: number) {
    const item = this.orderData.findIndex((x) => x.id === id);
    if (this.orderData[item].item > 0) {
      this.orderData[item].item -= 1;
      this.count -= 1;
      this.updatedPrice = this.orderData[item].price;
      this.totalPrice = this.totalPrice - this.updatedPrice;
      this.updatedPrice = 0;
    }
  }

  deleteItem(id: number) {
    const items = [...this.orderData];
    // this.totalPrice =
    //   this.totalPrice -
    //   this.orderData[id].price * this.orderData[id].item -
    //   this.orderData[id].price;
    this.totalPrice = this.totalPrice - items[id].price * items[id].item;
    console.log(items[id].price);
    console.log(items[id].item);

    items.splice(id, 1);
    this.orderData = items;

    //get the total item
    for (var i = 0; i < this.orderData.length; i++) {
      this.totalItem = this.totalItem + this.orderData[i].item;
    }
    //update the count
    this.count = this.totalItem;
    this.ngx.success("item deleted !", "Success", {
      timeOut: 2000,
    });
    this.totalItem = 0;
  }
}
