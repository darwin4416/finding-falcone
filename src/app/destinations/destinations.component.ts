import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'destinations',
    templateUrl: './destinations.component.html',
    styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
    showPlanet1: boolean = false;
    showPlanet2: boolean = false;
    showPlanet3: boolean = false;
    showPlanet4: boolean = false;
    @Input() planets;
    @Input() vehicles;
    constructor() { }

    ngOnInit() {
      console.log("here",this.vehicles)
    }
    onPlanetSelect(planet) {
        if(planet ==1 ){
            this.showPlanet1 = !this.showPlanet1;
        }
        else if(planet == 2){
            this.showPlanet2 = !this.showPlanet2;
        }
        
    }
}
