import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { CreateRes } from 'src/app/models/createRes';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  public res!: CreateRes;
  public flip: boolean = false;
  constructor(private _fetch_data_service: FetchDataServiceService) { }

  ngOnInit(): void {
  }

  getCreate(cid: string, nam: string, add: string, db: string, pan: string) {
    var y: number = +cid;
    this._fetch_data_service.create({ CustomerId: y, Name: nam, Address: add, DOB: db, PANno: pan }).subscribe(data => {
      this.res = data;
    });
    setTimeout(() => {
      this.flip = true;
    }, 500);
  }


}
