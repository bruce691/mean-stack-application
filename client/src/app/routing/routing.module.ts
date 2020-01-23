import { HomeComponent } from "./../home/home.component";
import { EditCustomerComponent } from "./../edit-customer/edit-customer.component";
import { CreateCustomerComponent } from "./../create-customer/create-customer.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "new", component: CreateCustomerComponent },
  { path: "edit/:id", component: EditCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
