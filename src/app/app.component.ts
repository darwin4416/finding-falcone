import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  planets:any[] = [];
  vehicles:any[];
  constructor(private getplanetService: AppService) { }
  
   ngOnInit(){
    this.getplanetService.getPlanets().subscribe(data =>{
      console.log(data,"data");
      data.forEach(el => {
        let planetObj = {
          name:el.name,
          distance: el.distance,
          isSelected: false
        }
        this.planets.push(planetObj)
      });
       
    });
    this.getplanetService.getVehicles().subscribe(data =>{
      this.vehicles = data
    })
     
  }
  
 

}
