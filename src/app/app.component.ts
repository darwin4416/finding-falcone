import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  planets:any[];
  vehicles:any[];
  constructor(private getplanetService: AppService) { }
  
   ngOnInit(){
    this.getplanetService.getPlanets().subscribe(data =>{
       this.planets = data;
    });
    this.getplanetService.getVehicles().subscribe(data =>{
      this.vehicles = data
    })
     
  }
  
 

}
