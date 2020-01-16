import { CustomerService } from "./../customer.service";
import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer.model";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
  deletedCustomerId: string;
  customers: Customer[];
  customerDetail: Customer = {
    _id: "",
    first_name: "",
    last_name: "",
    gender: "",
    age: null,
    email: ""
  };

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.GetCustomersFromService();
  }

  GetCustomersFromService() {
    this.customerService.GetCustomerList().subscribe(resp => {
      this.customers = resp as Customer[];
    });
  }

  updateCustomer(updateCustomerForm) {
    console.log(updateCustomerForm.value);
  }

  deleteCustomer() {
    console.log("deleting...");
    this.customerService
      .DeleteCustomer(this.deletedCustomerId)
      .subscribe(resp => {
        console.log("customer deleted..");
      });
  }

  displayDeleteForm(custid) {
    console.log(`deleting...${custid}`);
    this.deletedCustomerId = custid;
  }
}
