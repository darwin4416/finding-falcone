import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import { AppService } from '../app.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogComponent } from '../dialog/dialog.component';

@Component({
    selector: 'destinations',
    templateUrl: './destinations.component.html',
    styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit, OnChanges {
    firstPlanetSelected;
    secondPlanetSelected;
    thirdPlanetSelected;
    fourthPlanetSelected;
    firstPlanet = null;
    secondPlanet = null;
    thirdPlanet = null;
    fourthPlanet = null;
    totalTime = 0;
    travelTime = [];
    vehiclesCopy;
    firstVehicleSelected;
    secondVehicleSelected;
    thirdVehicleSelected;
    fourthVehicleSelected;

    showFirstVehicle: boolean = false;
    token;
    isSearchSuccess:boolean = false;
    @Input() planets;
    @Input() vehicles;
    constructor(
        private getPlanetService :AppService,
        public dialog: MatDialog
        ) { }

    ngOnInit() {
        this.getPlanetService.getToken().subscribe(data =>{
             this.token = data.token
          })
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.vehicles && typeof changes.vehicles !== 'undefined') {   
            this.vehiclesCopy = this.vehicles.map(x => Object.assign({}, x));
        }
    }

    onDestinationSelect(e, num) {
        if (num == 1) {
            if (this.firstPlanetSelected) {
                this.planets.forEach(element => {
                    if (element.name == this.firstPlanetSelected) {
                        element.isSelected = false;
                        this.firstPlanetSelected = e.target.value
                        this.planets.forEach(element => {
                            if (element.name == this.firstPlanetSelected) {
                                element.isSelected = true;
                                this.firstPlanet = element;
                            }
                        });
                    }
                });
            }
            else {
                this.firstPlanetSelected = e.target.value;
                this.planets.forEach(element => {
                    if (element.name == this.firstPlanetSelected) {
                        element.isSelected = true;
                        this.firstPlanet = element;
                    }
                });
            }
        }
        if (num == 2) {
            if (this.secondPlanetSelected) {
                this.planets.forEach(element => {
                    if (element.name == this.secondPlanetSelected) {
                        element.isSelected = false;
                        this.secondPlanetSelected = e.target.value
                        this.planets.forEach(element => {
                            if (element.name == this.secondPlanetSelected) {
                                element.isSelected = true;
                                this.secondPlanet = element;
                            }
                        });
                    }
                });
            }
            else {
                this.secondPlanetSelected = e.target.value;
                this.planets.forEach(element => {
                    if (element.name == this.secondPlanetSelected) {
                        element.isSelected = true;
                        this.secondPlanet = element;
                    }
                });
            }
        }
        if (num == 3) {
            if (this.thirdPlanetSelected) {
                this.planets.forEach(element => {
                    if (element.name == this.thirdPlanetSelected) {
                        element.isSelected = false;
                        this.thirdPlanetSelected = e.target.value
                        this.planets.forEach(element => {
                            if (element.name == this.thirdPlanetSelected) {
                                element.isSelected = true;
                                this.thirdPlanet = element;
                            }
                        });
                    }
                });
            }
            else {
                this.thirdPlanetSelected = e.target.value;
                this.planets.forEach(element => {
                    if (element.name == this.thirdPlanetSelected) {
                        element.isSelected = true;
                        this.thirdPlanet = element;
                    }
                });
            }
        }
        if (num == 4) {
            if (this.fourthPlanetSelected) {
                this.planets.forEach(element => {
                    if (element.name == this.fourthPlanetSelected) {
                        element.isSelected = false;
                        this.fourthPlanetSelected = e.target.value
                        this.planets.forEach(element => {
                            if (element.name == this.fourthPlanetSelected) {
                                element.isSelected = true;
                                this.fourthPlanet = element;
                            }
                        });
                    }
                });
            }
            else {
                this.fourthPlanetSelected = e.target.value;
                this.planets.forEach(element => {
                    if (element.name == this.fourthPlanetSelected) {
                        element.isSelected = true;
                        this.fourthPlanet = element;
                    }
                });
            }
        }
    }

    onVehicleSelect(el, index) {
        if (index == 1) {
            if(this.firstVehicleSelected){
                this.firstVehicleSelected.total_no++;
                this.firstVehicleSelected = el;
                this.firstVehicleSelected.total_no--;
                this.travelTime[0] = this.getInstanceTime(this.firstPlanet.distance,this.firstVehicleSelected.speed);
                this.totalTime = this.calculateTotalTime();
            }
            else{
                this.firstVehicleSelected = el;
                this.firstVehicleSelected.total_no--;
                this.travelTime[0] = this.getInstanceTime(this.firstPlanet.distance,this.firstVehicleSelected.speed);
                this.totalTime = this.calculateTotalTime();
            } 
        }
        if (index == 2) {
            if(this.secondVehicleSelected){
                this.secondVehicleSelected.total_no++;
                this.secondVehicleSelected = el;
                this.secondVehicleSelected.total_no--;
                this.travelTime[1] = this.getInstanceTime(this.secondPlanet.distance,this.secondVehicleSelected.speed);
                this.totalTime = this.calculateTotalTime();
            }
            else{
                this.secondVehicleSelected = el;
                this.secondVehicleSelected.total_no--;
                this.travelTime[1] = this.getInstanceTime(this.secondPlanet.distance,this.secondVehicleSelected.speed);
                this.totalTime = this.calculateTotalTime();
            } 
        }
        if (index == 3) {
            if(this.thirdVehicleSelected){
                this.thirdVehicleSelected.total_no++;
                this.thirdVehicleSelected = el;
                this.thirdVehicleSelected.total_no--;
                this.travelTime[2] = this.getInstanceTime(this.thirdPlanet.distance,this.thirdVehicleSelected.speed);
                this.totalTime = this.calculateTotalTime();
            }
            else{
                this.thirdVehicleSelected = el;
                this.thirdVehicleSelected.total_no--;
                this.travelTime[2] = this.getInstanceTime(this.thirdPlanet.distance,this.thirdVehicleSelected.speed);
                this.totalTime = this.calculateTotalTime();
            } 
        }
        if (index == 4) {
            if(this.fourthVehicleSelected){
                this.fourthVehicleSelected.total_no++;
                this.fourthVehicleSelected = el;
                this.fourthVehicleSelected.total_no--;
                this.travelTime[3] = this.getInstanceTime(this.fourthPlanet.distance,this.fourthVehicleSelected.speed);
                this.totalTime = this.calculateTotalTime();
            }
            else{
                this.fourthVehicleSelected = el;
                this.fourthVehicleSelected.total_no--;
                this.travelTime[3] = this.getInstanceTime(this.fourthPlanet.distance,this.fourthVehicleSelected.speed);
                this.totalTime = this.calculateTotalTime();
            } 
        }
    }

    getInstanceTime(pDistance,vSPeed){
        return (pDistance/vSPeed);
    }

    calculateTotalTime(){
        let sum = 0;
       for(let i = 0; i< this.travelTime.length;i++){
          sum += this.travelTime[i]
       }
       return sum;
    }

    openDialog(): void {
        
        const dialogRef = this.dialog.open(DialogComponent, {
          disableClose: true,
          panelClass:'custom-dialog-container',
          data: {isSearchSuccess: this.isSearchSuccess}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
         // this.animal = result;
        });
        dialogRef.backdropClick().subscribe(() => {
            // Close the dialog
            dialogRef.close();
          })
      }

      findFalcone(){
          const data = {
              token:this.token,
              planet_names:[
                  this.firstPlanetSelected,
                  this.secondPlanetSelected,
                  this.thirdPlanetSelected,
                  this.fourthPlanetSelected
              ],
              vehicle_names:[
                  this.firstVehicleSelected.name,
                  this.secondVehicleSelected.name,
                  this.thirdVehicleSelected.name,
                  this.fourthVehicleSelected.name
              ]
          }
          this.getPlanetService.findFalcone(data).subscribe(res => {
              console.log(res,"res");
              if(res.status == "success"){
                  this.isSearchSuccess = true;
              }
              else{
                  this.isSearchSuccess = false;
              }
              this.openDialog();
          })
      }

      
}
