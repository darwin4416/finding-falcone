import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {

  planets: any[] = []
  constructor(private http: Http) { }

  errorHandler(error: Response) {
    return Observable.throw(error || "Server Error");
  }


  //********************** Data from Api  ********************************************* */
  private planetsUrl = "https://findfalcone.herokuapp.com/planets";
  getPlanets(){     
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.planetsUrl,{ headers: headers })
      .map(res => res.json())
      .catch(this.errorHandler);
  }


}


