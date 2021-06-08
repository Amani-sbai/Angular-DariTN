import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Renting } from '../Renting';
import { RentingServiceService } from '../renting-service.service';

@Component({
  selector: 'app-renting',
  templateUrl: './renting.component.html',
  styleUrls: ['./renting.component.css']
})
export class RentingComponent implements OnInit {
  renting:Renting[];
  constructor(private rentingService: RentingServiceService) { }

  ngOnInit(): void {
    this.getRentings();
  }
  public getRentings():void{
    this.rentingService.getRentings().subscribe(
      (Response: Renting[]) =>{
      this.renting=Response;
    }),
    (error:HttpErrorResponse) =>{
      alert(error.message);
    };}
    delete (i:number){
      this.rentingService.deleteRentingById(this.renting[i].id).subscribe(( response: void)=>{this.getRentings();},
        (error: HttpErrorResponse) => {alert(error.message);});
    }
}
