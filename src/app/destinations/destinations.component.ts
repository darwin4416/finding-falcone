import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'destinations',
    templateUrl: './destinations.component.html',
    styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit,OnChanges {
    // showPlanet1: boolean = false;
    // showPlanet2: boolean = false;
    // showPlanet3: boolean = false;
    // showPlanet4: boolean = false;

    planetCopies;
    isDisabled0 = false;
    @Input() planets;
    @Input() vehicles;
    constructor() { }

    ngOnInit() {
      console.log("here",this.vehicles)
    }
    ngOnChanges(changes:SimpleChanges){
        if(changes.planets){
           this.planets.forEach(el => {
               let planetObj ={
                   name:el.name,
                   distance:el.distance,
                   isSelected:false
               }
               this.planetCopies.push(planetObj)
           });
        }
    }
    // onPlanetSelect(planet) {
    //     if(planet ==1 ){
    //         this.showPlanet1 = !this.showPlanet1;
    //     }
    //     else if(planet == 2){
    //         this.showPlanet2 = !this.showPlanet2;
    //     }
        
    // }
    onPlanetSelect(e){
        console.log(e)
     let index= e.target.value;
    //  this.planetCopies.splice(index,1);
    }
}
