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
  //selectedCustomer: Customer;

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
    this.customerService
      .PutCustomer(updateCustomerForm.value)
      .subscribe(resp => {
        this.GetCustomersFromService();
      });
  }

  displayUpdateForm(custid) {
    console.log("updating...");
    this.customerDetail = this.customers.find(c => {
      return c._id === custid;
    });
    console.log(this.customerDetail);
  }

  deleteCustomer() {
    this.customerService
      .DeleteCustomer(this.deletedCustomerId)
      .subscribe(resp => {
        console.log("customer deleted..");
        this.GetCustomersFromService();
      });
  }

  displayDeleteForm(custid) {
    console.log(`deleting...${custid}`);
    this.deletedCustomerId = custid;
  }
}
