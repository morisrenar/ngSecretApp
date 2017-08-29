import {Component, Input, OnInit} from '@angular/core';
import {Facilities} from "../model/facilities";

@Component({
  selector: 'app-facilities-details',
  templateUrl: './facilities-details.component.html',
  styleUrls: ['./facilities-details.component.css']
})
export class FacilitiesDetailsComponent implements OnInit {

  @Input("facility")
  public facility: Facilities;

  constructor() { }

  ngOnInit() {
  }

}
