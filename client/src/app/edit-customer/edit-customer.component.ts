import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer.model";
import { CustomerService } from "../customer.service";

@Component({
  selector: "app-edit-customer",
  templateUrl: "./edit-customer.component.html",
  styleUrls: ["./edit-customer.component.css"]
})
export class EditCustomerComponent implements OnInit {
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

  updateCustomer(updateCustomerForm) {
    this.customerService
      .PutCustomer(updateCustomerForm.value)
      .subscribe(resp => {});
  }
}
