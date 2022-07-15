import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './models/account';
import { Customer } from './models/customer';
import { Transactions } from './models/transactions';
import { AllCustomerAcc } from './models/allCustomerAcc';
import { CstAccts } from './models/CstAccts';
import { CreateRes } from './models/createRes';

@Injectable({
  providedIn: 'root'
})
export class FetchDataServiceService {


  public c_or_e: number = 1;
  constructor(private http: HttpClient) { }


  private _url = "https://localhost:5001/api/Account/getAccount/";
  getAccount(aid: string): Observable<Account> {

    return this.http.get<Account>(this._url + aid);
  }

  private _url2 = "https://localhost:5004/api/Transaction/getTransactions/";
  getTransData(cid: string): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(this._url2 + cid);
  }

  private _url3 = "https://localhost:5001/api/Account/getAccountStatement";
  getStmt(data: { AccountId: string, from_date: string, to_date: string }): Observable<any> {
    return this.http.post(this._url3, data, {
      headers: {
        'Content-Type': 'application/json; Charset=UTF-8'
      }
    });
  }

  private _url4 = "https://localhost:5004/api/Transaction/deposit";
  deposit(data: { AccountId: string, amount: string }): Observable<any> {
    return this.http.post(this._url4, data, {
      headers: {
        'Content-Type': 'application/json; Charset=UTF-8'
      }
    });
  }

  private _url5 = "https://localhost:5004/api/Transaction/withdraw";
  withdraw(data: { AccountId: string, amount: string }): Observable<any> {
    return this.http.post(this._url5, data, {
      headers: {
        'Content-Type': 'application/json; Charset=UTF-8'
      }
    });
  }

  private _url6 = "https://localhost:5004/api/Transaction/transfer";
  transfer(data: { Source_AccountId: string, Target_AccountId: string, amount: string }): Observable<any> {
    return this.http.post(this._url6, data, {
      headers: {
        'Content-Type': 'application/json; Charset=UTF-8'
      }
    });
  }



  private _url8 = "https://localhost:5002/api/Customer/getCustomerDetails/";
  getCustomer(cid: string): Observable<Customer> {

    return this.http.get<Customer>(this._url8 + cid);
  }

  private _url9 = "https://localhost:5002/api/Customer/Get";
  vAllCustomers(): Observable<Customer[]> {

    return this.http.get<Customer[]>(this._url9);
  }

  private _url10 = "https://localhost:5001/api/Account/getAllCustomerAccounts";
  vAllCustomers_Accounts(): Observable<AllCustomerAcc[]> {

    return this.http.get<AllCustomerAcc[]>(this._url10);
  }

  private _url11 = "https://localhost:5001/api/Account/getCustomerAccounts/";
  getCstAccounts(cid: string): Observable<CstAccts[]> {

    return this.http.get<CstAccts[]>(this._url11 + cid);
  }

  private _url7 = "https://localhost:5002/api/Customer/createCustomer";
  create(data: { CustomerId: number, Name: string, Address: string, DOB: string, PANno: string }): Observable<any> {
    return this.http.post(this._url7, data, {
      headers: {
        'Content-Type': 'application/json; Charset=UTF-8'
      }
    });
  }

}


