import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { CartPageComponent } from "./cart-page/cart-page.component";

@NgModule({
  declarations: [AppComponent, CartPageComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ToastrModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
