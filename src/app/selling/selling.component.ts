import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Salling } from '../selling';
import { SellingServiceService } from '../selling-service.service';
@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.css']
})
export class SellingComponent implements OnInit {
  public sellings:Salling[];
  constructor(private sellingservice:SellingServiceService)
   { 

   }

  ngOnInit(): void {
    this.getAllSelling();
  }
  public getAllSelling():void{

    this.sellingservice.getAllSelling().subscribe(
      (Response: Salling[]) =>{
      this.sellings=Response;
    }),
    (error:HttpErrorResponse) =>{
      alert(error.message);
    }
    ;}
    delete (i:number){
      this.sellingservice.deleteSalingById(this.sellings[i].id).subscribe(( response: void)=>{this.getAllSelling();},
        (error: HttpErrorResponse) => {alert(error.message);});
    }
  }

