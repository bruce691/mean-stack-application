import { CustomerService } from "./../customer.service";
import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer.model";

@Component({
  selector: "app-list-customer",
  templateUrl: "./list-customer.component.html",
  styleUrls: ["./list-customer.component.css"]
})
export class ListCustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.GetCustomersFromService();
  }

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

  GetCustomersFromService() {
    this.customerService.GetCustomerList().subscribe(resp => {
      this.customers = resp as Customer[];
    });
  }

  updateCustomer(updateCustomerForm) {
    this.customerService
      .PutCustomer(updateCustomerForm.value)
      .subscribe(resp => {
        this.GetCustomersFromService();
      });
  }

  displayUpdateForm(custid) {
    this.customerDetail = this.customers.find(c => {
      return c._id === custid;
    });
  }

  deleteCustomer() {
    this.customerService
      .DeleteCustomer(this.deletedCustomerId)
      .subscribe(resp => {
        this.GetCustomersFromService();
      });
  }

  displayDeleteForm(custid) {
    this.deletedCustomerId = custid;
  }
}
