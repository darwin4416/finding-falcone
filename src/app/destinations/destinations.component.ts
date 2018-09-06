import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'destinations',
    templateUrl: './destinations.component.html',
    styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit, OnChanges {
    selectedInFirst;
    selectedInSecond;
    selectedInThird;
    @Input() planets;
    @Input() vehicles;
    constructor() { }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.planets) {

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
    onDestinationSelect(e, num) {
        let index = e.target.value;
        if (num == 0) {
            for (let i = 0; i < this.planets.length; i++) {
                if (this.planets[i].isSelected == true) {
                    this.planets[i].isSelected = false;
                }
                else {
                    this.planets[index].isSelected = true;
                    this.selectedInFirst = index;
                }
            }
        }
        if (num == 1) {

            for (let i = 0; i < this.planets.length; i++) {
                if (i != this.selectedInFirst) {
                    if (this.planets[i].isSelected == true) {
                        this.planets[i].isSelected = false;
                    }
                    else {
                        this.planets[index].isSelected = true;
                        this.selectedInSecond = index
                    }
                }
            }
        }
        if (num == 2) {
            for (let i = 0; i < this.planets.length; i++) {
                if (i != this.selectedInFirst && i != this.selectedInSecond) {
                    if (this.planets[i].isSelected == true) {
                        this.planets[i].isSelected = false;
                    }
                    else {
                        this.planets[index].isSelected = true;
                        this.selectedInThird = index
                    }
                }
            }
        }
        if (num == 3) {
            for (let i = 0; i < this.planets.length; i++) {
                if (i != this.selectedInFirst && i != this.selectedInSecond && i != this.selectedInThird) {
                if (this.planets[i].isSelected == true) {
                    this.planets[i].isSelected = false;
                }
                else {
                    this.planets[index].isSelected = true;

                }
            }
            }
        }
    }
 
}
