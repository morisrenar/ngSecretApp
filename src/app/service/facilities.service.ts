import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class FacilitiesService {

  _getUrl = "http://localhost:8080/ru/facilities";
  constructor(private _http: Http) { }

  getFacilities() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }
}
