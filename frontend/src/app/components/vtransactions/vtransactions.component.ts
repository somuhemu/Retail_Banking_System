import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { Transactions } from 'src/app/models/transactions';

@Component({
  selector: 'app-vtransactions',
  templateUrl: './vtransactions.component.html',
  styleUrls: ['./vtransactions.component.css']
})
export class VtransactionsComponent implements OnInit {

  public trs: Transactions[] = [];
  public flip: boolean = false;
  constructor(private _fetch_data_service: FetchDataServiceService) { }

  ngOnInit(): void {
  }

  getTrans(val: string) {
    this._fetch_data_service.getTransData(val).subscribe(data => {
      this.trs = data;
    });
    setTimeout(() => {
      this.flip = true;
    }, 500);
  }

}
