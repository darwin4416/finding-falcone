import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material";


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { DestinationsComponent } from './destinations/destinations.component';
import { DataListComponent } from './dataList/data-list.component';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    DataListComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatDialogModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
