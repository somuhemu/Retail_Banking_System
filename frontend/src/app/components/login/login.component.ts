import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users = [
    {
      user_name: "Somu",
      password: "123"
    },
    {
      user_name: "Nithis",
      password: "123"
    }
  ];

  employees = [
    {
      emp_name: "Pavan",
      password: "123"
    },
    {
      emp_name: "Priyanka",
      password: "123"
    }
  ];

  succ = false;

  constructor(private _fetch_data_service: FetchDataServiceService) { }

  ngOnInit(): void {
  }

  set(ce: number) {
    this._fetch_data_service.c_or_e = ce;
  }

  name = '';
  psd = '';

  check_customer(ce: number): boolean {

    for (let i = 0; i < this.users.length; i++) {
      if (this.name === this.users[i].user_name && this.psd === this.users[i].password) {
        this._fetch_data_service.c_or_e = ce;
        return true;
      }
    }
    return false;
  }


  check_employee(ce: number) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.name === this.employees[i].emp_name && this.psd === this.employees[i].password) {
        this._fetch_data_service.c_or_e = ce;
        return true;
      }
    }
    return false;
  }




}
