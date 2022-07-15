import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { Account } from 'src/app/models/account';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-vaccounts',
  templateUrl: './vaccounts.component.html',
  styleUrls: ['./vaccounts.component.css']
})
export class VaccountsComponent implements OnInit {

  public acc !: Account;
  public flip: boolean = false;
  public ce = 1;
  constructor(private _fetch_data_service: FetchDataServiceService) { }

  ngOnInit(): void {
    this.ce = this._fetch_data_service.c_or_e;
  }

  getAccData(val: string) {
    this._fetch_data_service.getAccount(val).subscribe(data => {
      this.acc = data;
    });
    setTimeout(() => {
      this.flip = true;
    }, 500);
  }


}
