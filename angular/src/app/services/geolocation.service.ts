import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Helper} from '../MISC/helper';

@Injectable()
export class GeolocationService {
  private serverUrl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='; // ?email=marcusbellamy@msn.com&password=password'
  private serverSuffix = '&sensor=true';
  constructor(private help: Helper, private http: Http) { }


  getCityFromLatLng(lat: number, lng: number): Promise<any> {
    return this.http.get(this.serverUrl + lat + ',' + lng + this.serverSuffix)
    .toPromise()
    .then(this.help.extractData)
    .catch(this.help.handleError);


  }


}
