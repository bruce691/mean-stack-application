import { CustomerService } from "./../customer.service";
import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer.model";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.GetCustomersFromService();
  }

  GetCustomersFromService() {
    //this.customers = this.customerService.GetCustomerList();
    this.customerService.GetCustomerList().subscribe(resp => {
       this.customers = resp as Customer[];
     });
  }
}
