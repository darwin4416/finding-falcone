import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Destination1 } from './Destination1/destination1.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    Destination1,
  
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
