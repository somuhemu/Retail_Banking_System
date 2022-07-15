import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { DWresp } from 'src/app/models/dwresp';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  public res!: DWresp;
  public flip: boolean = false;
  constructor(private _fetch_data_service: FetchDataServiceService) { }

  ngOnInit(): void {
  }

  getWithdraw(aid: string, amt: string) {
    this._fetch_data_service.withdraw({ AccountId: aid, amount: amt }).subscribe(data => {
      this.res = data;
    });
    setTimeout(() => {
      this.flip = true;
    }, 500);
  }

}
