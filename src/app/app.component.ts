import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  planets:any[] = [];
  vehicles:any[];
  constructor(private getplanetService: AppService,private http: Http) { }
  
   ngOnInit(){
     
    this.getplanetService.getPlanets().subscribe(data =>{
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
      this.vehicles = data;
    })
     
  }
  
 

}
