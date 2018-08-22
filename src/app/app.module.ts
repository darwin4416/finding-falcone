import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { DestinationsComponent } from './destinations/destinations.component';
import { DataListComponent } from './dataList/data-list.component';



@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
