import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'destination1',
  templateUrl: './destination1.component.html'

})
export class Destination1 implements OnInit {
  @Input ('planets') planets;
  constructor(private getplanetService: AppService) { }
  
  ngOnInit(){
    console.log(this.planets);
  }

  
}