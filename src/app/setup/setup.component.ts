import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DigitransitService} from "../services/digitransit.service";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {


  private asema: string = '';

  constructor(private router: Router, private digitransitService: DigitransitService) { }

  haeReitit = () => {
    this.digitransitService.setNimi(this.asema);
    this.router.navigate(['routes']);
  }


  ngOnInit() {
  }

}

