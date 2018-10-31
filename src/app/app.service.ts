import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {


  constructor(private http: Http) { }

  errorHandler(error: Response) {
    return Observable.throw(error || "Server Error");
  }


  //********************** Data from Api  ********************************************* */
  private planetsUrl = "https://findfalcone.herokuapp.com/planets";
  private vehiclesUrl = "https://findfalcone.herokuapp.com/vehicles";
  private tokenUrl = "https://findfalcone.herokuapp.com/token";
  getPlanets(){     
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.planetsUrl,{ headers: headers })
      .map(res => res.json())
      .catch(this.errorHandler);
  }

  
  getVehicles(){     
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.vehiclesUrl,{ headers: headers })
      .map(res => res.json())
      .catch(this.errorHandler);
  }
  getToken() {
    let headers = new Headers();
    headers.append("Accept","application/json");
    return this.http.post(this.tokenUrl,{},{ headers: headers })
      .map(res => res.json())
      .catch(this.errorHandler);
  }

}


