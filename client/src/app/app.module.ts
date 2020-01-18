import { RoutingModule } from "./routing/routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CustomerService } from "./shared/customer.service";
import { CreateCustomerComponent } from "./create-customer/create-customer.component";
import { EditCustomerComponent } from "./edit-customer/edit-customer.component";
import { ListCustomerComponent } from "./list-customer/list-customer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, RoutingModule],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
