import { Customer } from "./customer.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  customers: Customer[];

  readonly APIUrl = "http://localhost:3000/Customers";

  constructor(private http: HttpClient) {}

  PostCustomer(cust: Customer) {
    return this.http.post(this.APIUrl, cust);
  }

  GetCustomerList() {
    return this.http.get(this.APIUrl);
  }

  GetCustomerById(id: string) {
    return this.http.get(this.APIUrl + `/${id}`);
  }

  PutCustomer(cust: Customer) {
    return this.http.put(this.APIUrl + `/${cust._id}`, cust);
  }

  DeleteCustomer(custid: string) {
    return this.http.delete(this.APIUrl + `/${custid}`);
  }
}
