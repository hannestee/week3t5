import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DigitransitService {
  private url: string = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  private nimi: string = '';

  constructor(private http: Http) { }



  getRoutes = () => {
    let data = `{
stops(name: "${this.nimi}") {
id
name
lat
lon
patterns {
name
route {
        longName
      }
}
}
}`;
    let headers = new Headers({ 'Content-Type': 'application/graphql' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, data, options)
      .map(resp => resp.json() );

  };

  setNimi = (name: string) => {
    this.nimi = name;
  };

}
