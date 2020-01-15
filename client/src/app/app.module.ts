import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CustomersComponent } from "./customers/customers.component";
import { CustomerService } from "./customer.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CustomersComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
