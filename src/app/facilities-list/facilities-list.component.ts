import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facilities} from "../model/facilities";

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {

  @Output("selectedFacility")
  public selectedFacility = new EventEmitter();

  constructor() { }

  @Input("facilities")
  facilities: Array<Facilities>;

  ngOnInit() {
  }

  onSelect(facility: Facilities) {
    this.selectedFacility.emit(facility);
  }

}
