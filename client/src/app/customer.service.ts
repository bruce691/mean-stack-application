import { Customer } from "./customer.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { retry, catchError } from "rxjs/operators";
//import "rxjs/add/operator/map";
//import "rxjs/add/operator/toPromise";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  selectedCustomer: Customer;
  customers: Customer[];

  readonly APIUrl = "http://localhost:3000/Customers";

  constructor(private http: HttpClient) {}

  PostCustomer(cust: Customer) {
    return this.http.post(this.APIUrl, cust);
  }

  GetCustomerList() {
    return this.http.get(this.APIUrl);
  }

  PutCustomer(cust: Customer) {
    return this.http.put(this.APIUrl + `/${cust._id}`, cust);
  }

  DeleteCustomer(custid: string) {
    return this.http.delete(this.APIUrl + `/${custid}`);
  }
}
