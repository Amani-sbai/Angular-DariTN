import { Component, OnInit } from '@angular/core';
import {Credit} from '../model/credit';
import {CreditserviceService} from '../services/creditservice.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Color, Label, MultiDataSet} from 'ng2-charts';
import {ChartDataSets, ChartType} from 'chart.js';

@Component({
  selector: 'app-creditsimulation',
  templateUrl: './creditsimulation.component.html',
  styleUrls: ['./creditsimulation.component.css']
})
export class CreditsimulationComponent implements OnInit {
  credit: Credit;
  doughnutChartLabels: Label[] = ['BT', 'BH', 'Attijari Bank', 'Amen Bank', 'Banque Zitouna', 'STB', 'BNA', 'UIB', 'BFPME'];
  doughnutChartType: ChartType = 'pie';
  doughnutChartData = [];
  title = 'OCCURENCE OF USED BANKS IN CREDIT SIMULATIONS';
  public datasets: ChartDataSets[] = [];
  stats: Array<number>;
  constructor(private creditService: CreditserviceService) { }

  ngOnInit(): void {
    this.credit = new Credit();
    this.Statistics();
  }
  calcul(): void {
    this.creditService.addcredit(this.credit).subscribe((response: Credit) => {this.credit = response; },
      (error: HttpErrorResponse) => {alert(error.message); });
  }
  Statistics(): void {
    this.creditService.stat().subscribe((response: Array<number>) =>
      {this.doughnutChartData = response; console.log(this.doughnutChartData); },
      (error: HttpErrorResponse) => {alert(error.message); });
    this.datasets = [ {
      data: this.doughnutChartData,
      backgroundColor: ['rgb(102,255,178)', 'rgb(0,255,128)', 'rgb(178,255,102)', 'rgb(255,102,178)', 'rgb(255,102,102)',
        'rgb(255,178,102)', 'rgb(255,255,102)', 'rgb(102,178,255)', 'rgb(102,102,255)']
    }];
  }
}
