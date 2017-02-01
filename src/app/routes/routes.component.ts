import { Component, OnInit } from '@angular/core';
import {DigitransitService} from "../services/digitransit.service";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  private asemaVastaus: any = [];
  private reittiVastaus: any = [];

  constructor(private digitransitService: DigitransitService) { }

  ngOnInit() {
    this.digitransitService.getRoutes()
      .subscribe(
        (res) => {
          this.asemaVastaus = res.data.stops;
          this.reittiVastaus = res.data.stops[0].patterns;

          //console.log(res.data.stops[0].patterns[5].name);
          //console.log(res.data.stops[0].patterns[5].route.longName);
          console.log(res.data.stops[0].name);
          console.log(this.asemaVastaus[0].lat);
        }
      );
  }
}
