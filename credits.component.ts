import { Component, OnInit } from '@angular/core';
import {Bank} from '../model/bank';
import {Credit} from '../model/credit';
import {HttpErrorResponse} from '@angular/common/http';
import {BankserviceService} from '../services/bankservice.service';
import {CreditserviceService} from '../services/creditservice.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {
  creditList: Credit[];
  credit: Credit;
  constructor(private creditService: CreditserviceService) { }

  ngOnInit(): void {
    this.getcredits();
  }

  public getcredits(): void {
    this.creditService.getcredits().subscribe((response: Credit[]) => {this.creditList = response; console.log(this.creditList); },
      (error: HttpErrorResponse) => {alert(error.message); });
  }
  del(i: number): void {
  this.creditService.deletecredit(this.creditList[i].id).subscribe((response: void ) => {this.getcredits(); },
    (error: HttpErrorResponse) => {alert(error.message); });
}
}
