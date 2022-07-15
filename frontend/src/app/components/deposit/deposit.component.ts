import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { DWresp } from 'src/app/models/dwresp';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  public res!: DWresp;
  public flip: boolean = false;
  constructor(private _fetch_data_service: FetchDataServiceService) { }

  msg: string = "";
  sb: number = 0;
  db: number = 0;

  ngOnInit(): void {
  }

  getDeposit(aid: string, amt: string) {
    this._fetch_data_service.deposit({ AccountId: aid, amount: amt }).subscribe(data => {
      this.res = data;
    });

    setTimeout(() => {
      this.flip = true;
    }, 500);
  }


}

