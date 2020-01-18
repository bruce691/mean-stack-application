import { CustomerService } from "../shared/customer.service";
import { Component, OnInit } from "@angular/core";
import { Customer } from "../shared/customer.model";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  customerDetail: Customer = {
    _id: "",
    first_name: "",
    last_name: "",
    gender: "",
    age: null,
    email: ""
  };

  constructor(private customerService: CustomerService) {}

  ngOnInit() {}

  addCustomer(addCustomerForm) {
    this.customerService
      .PostCustomer(addCustomerForm.value)
      .subscribe(resp => {});
  }
}
