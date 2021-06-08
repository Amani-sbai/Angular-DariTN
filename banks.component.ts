import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Bank} from '../model/bank';
import {BankserviceService} from '../services/bankservice.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  bankList: Bank[];
  bank: Bank;
  constructor(private bankService: BankserviceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getBanks();
  }
  getBanks(): void {
    this.bankService.getBanks().subscribe(
      (response: Bank[]) => {this.bankList = response; console.log(this.bankList); },
      (error: HttpErrorResponse) => {alert(error.message); });
  }
  delete(i: number): void {
    this.bankService.deleteBank(this.bankList[i].id).subscribe((response: void ) => {this.getBanks(); },
      (error: HttpErrorResponse) => {alert(error.message); });
  }
}
