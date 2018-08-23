import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'destinations',
    templateUrl: './destinations.component.html',
    styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit,OnChanges {
    showPlanet1: boolean = false;
    showPlanet2: boolean = false;
    showPlanet3: boolean = false;
    showPlanet4: boolean = false;

    planetCopy;
    isDisabled = false;
    @Input() planets;
    @Input() vehicles;
    constructor() { }

    ngOnInit() {
      console.log("here",this.vehicles)
    }
    ngOnChanges(changes:SimpleChanges){
        if(changes.planets){
            this.planetCopy = this.planets
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
     let index= e.target.value;
     this.isDisabled = true;
    }
}
