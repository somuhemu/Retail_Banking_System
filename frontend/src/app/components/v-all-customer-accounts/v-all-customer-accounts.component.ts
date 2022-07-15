import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { AllCustomerAcc } from 'src/app/models/allCustomerAcc';

@Component({
  selector: 'app-v-all-customer-accounts',
  templateUrl: './v-all-customer-accounts.component.html',
  styleUrls: ['./v-all-customer-accounts.component.css']
})
export class VAllCustomerAccountsComponent implements OnInit {

  public cms: AllCustomerAcc[] = [];
  public flip: boolean = false;
  constructor(private _fetch_data_service: FetchDataServiceService) { }

  ngOnInit(): void {
  }

  getAllCustAcct() {
    this._fetch_data_service.vAllCustomers_Accounts().subscribe(data => {
      this.cms = data;
    });
    setTimeout(() => {
      this.flip = true;
    }, 500);
  }

}
