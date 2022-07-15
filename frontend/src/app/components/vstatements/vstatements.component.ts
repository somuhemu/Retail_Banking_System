import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { Statements } from 'src/app/models/statements';

@Component({
  selector: 'app-vstatements',
  templateUrl: './vstatements.component.html',
  styleUrls: ['./vstatements.component.css']
})
export class VstatementsComponent implements OnInit {

  public stms: Statements[] = [];
  public flip: boolean = false;

  constructor(private _fetch_data_service: FetchDataServiceService) { }

  ngOnInit(): void {
  }

  getStmts(aid: string, fd: string, td: string) {
    this._fetch_data_service.getStmt({ AccountId: aid, from_date: fd, to_date: td }).subscribe(data => {
      this.stms = data;
      console.log(this.stms);
    });
    setTimeout(() => {
      this.flip = true;
    }, 500);
  }


}
