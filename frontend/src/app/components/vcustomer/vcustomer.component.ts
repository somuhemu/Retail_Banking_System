import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { Customer } from 'src/app/models/customer';
@Component({
  selector: 'app-vcustomer',
  templateUrl: './vcustomer.component.html',
  styleUrls: ['./vcustomer.component.css']
})
export class VcustomerComponent implements OnInit {

  public acc !: Customer;
  public flip: boolean = false;
  constructor(private _fetch_data_service: FetchDataServiceService) { }

  ngOnInit(): void {
  }

  getCustData(val: string) {
    this._fetch_data_service.getCustomer(val).subscribe(data => {
      this.acc = data;
    });
    setTimeout(() => {
      this.flip = true;
    }, 500);
  }

}
