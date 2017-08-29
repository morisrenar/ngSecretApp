import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

  _postUrl = "http://localhost:8080/login";
  constructor(private _http: Http) { }

  makeAuth(userName: string, password: string) {
    const authUser = {
      "userName": userName,
      "password": password
    };

    console.log("Post request to " + this._postUrl);
    
    const headers = new Headers({"Content-Type": "application/json"});
    const options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify({
      "username": "user1",
      "password": "12345678"
    }), options)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }

  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
