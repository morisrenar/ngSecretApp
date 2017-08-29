import { Component, OnInit } from '@angular/core';
import {Facilities} from "../model/facilities";
import {FacilitiesService} from "../service/facilities.service";

@Component({
  selector: 'app-facilities-center',
  templateUrl: './facilities-center.component.html',
  styleUrls: ['./facilities-center.component.css']
})
export class FacilitiesCenterComponent implements OnInit {

  selectedFacility: Facilities;

  facilities: Array<Facilities>;

  constructor(private facilitiesService: FacilitiesService) { }

  ngOnInit() {
    this.facilitiesService.getFacilities().subscribe(resFacilities => this.facilities = resFacilities);
  }

  onSelectFacility(facility: Facilities) {
    this.selectedFacility = facility;
    console.log(this.selectedFacility);
  }

}
