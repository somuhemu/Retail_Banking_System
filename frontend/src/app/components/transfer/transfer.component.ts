import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { DWresp } from 'src/app/models/dwresp';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  public res!: DWresp;
  public flip: boolean = false;
  constructor(private _fetch_data_service: FetchDataServiceService) { }

  ngOnInit(): void {
  }

  getTransfer(sid: string, tid: string, amt: string) {
    this._fetch_data_service.transfer({ Source_AccountId: sid, Target_AccountId: tid, amount: amt }).subscribe(data => {
      this.res = data;
    });
    setTimeout(() => {
      this.flip = true;
    }, 500);
  }

}
