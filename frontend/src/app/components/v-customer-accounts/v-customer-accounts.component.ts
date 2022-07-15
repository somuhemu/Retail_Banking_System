import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { CstAccts } from 'src/app/models/CstAccts';

@Component({
  selector: 'app-v-customer-accounts',
  templateUrl: './v-customer-accounts.component.html',
  styleUrls: ['./v-customer-accounts.component.css']
})
export class VCustomerAccountsComponent implements OnInit {

  public cms: CstAccts[] = [];
  public flip: boolean = false;

  constructor(private _fetch_data_service: FetchDataServiceService) { }

  ngOnInit(): void {
  }

  getCstAcc(val: string) {
    this._fetch_data_service.getCstAccounts(val).subscribe(data => {
      this.cms = data;
    });
    setTimeout(() => {
      this.flip = true;
    }, 500);
  }

}
