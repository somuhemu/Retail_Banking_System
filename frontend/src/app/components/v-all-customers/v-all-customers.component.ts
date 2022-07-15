import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-v-all-customers',
  templateUrl: './v-all-customers.component.html',
  styleUrls: ['./v-all-customers.component.css']
})
export class VAllCustomersComponent implements OnInit {

  public cms: Customer[] = [];
  public flip: boolean = false;
  constructor(private _fetch_data_service: FetchDataServiceService) { }

  ngOnInit(): void {
  }

  getAllCust() {
    this._fetch_data_service.vAllCustomers().subscribe(data => {
      this.cms = data;
    });
    setTimeout(() => {
      this.flip = true;
    }, 500);
  }


}
