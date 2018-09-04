import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'destinations',
    templateUrl: './destinations.component.html',
    styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit, OnChanges {


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
    onDestinationSelect(e,num) {
        let index = e.target.value;
        
        // if(index== 0){
        //    if(this.planets[0].isSelected == false){
        //     this.planets[0].isSelected = !this.planets[0].isSelected;
        //    }
        //    else{
        //     this.planets.forEach(el => {
        //         el.isSelected = false;
        //     });
        //    }  
        // }
        // if(index== 1){
        //     if(this.planets[1].isSelected == false){
        //         this.planets[1].isSelected = !this.planets[1].isSelected;
        //        }
        //        else{
        //         this.planets.forEach(el => {
        //             el.isSelected = false;
        //         });
        //        } 
        //  }
        //  if(index== 2){
        //     if(this.planets[2].isSelected == false){
        //         this.planets[2].isSelected = !this.planets[2].isSelected;
        //        }
        //        else{
        //         this.planets.forEach(el => {
        //             el.isSelected = false;
        //         });
        //        } 
        //  }
        //  if(index== 3){
        //     if(this.planets[3].isSelected == false){
        //         this.planets[3].isSelected = !this.planets[3].isSelected;
        //        }
        //        else{
        //         this.planets.forEach(el => {
        //             el.isSelected = false;
        //         });
        //        } 
        //  }
        //  if(index==4){
        //     if(this.planets[4].isSelected == false){
        //         this.planets[4].isSelected = !this.planets[4].isSelected;
        //        }
        //        else{
        //         this.planets.forEach(el => {
        //             el.isSelected = false;
        //         });
        //        } 
        //  }
        //  if(index== 5){
        //     if(this.planets[0].isSelected == false){
        //         this.planets[0].isSelected = !this.planets[0].isSelected;
        //        }
        //        else{
        //         this.planets.forEach(el => {
        //             el.isSelected = false;
        //         });
        //        } 
        //  }
    }
    // onDestinationSelect2(e){
    //     let index = e.target.value;
    //     // this.planets[this.firstSelection].isSelected = true;
    // }
    // onDestinationSelect3(e){
    //     let index = e.target.value;
    //     // this.planets[index].isSelected = true;
    // }
    // onDestinationSelect4(e){
    //     let index = e.target.value;
    //     // this.planets[index].isSelected = true;
    // }
}
