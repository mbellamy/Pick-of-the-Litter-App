import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Helper} from '../MISC/helper';
import {AuthService} from './auth.service';


@Injectable()
export class DatabaseService {
  private serverUrl = 'https://litter-backend.herokuapp.com/API';

  constructor(private help: Helper, private http: Http, private auth: AuthService) { }


  getLitter(radius: number, lat: number, lng: number, creator: number): Promise<any> {
    return this.http.get(this.serverUrl + '?call=l_g&radius=' + radius + '&lat=' + lat + '&lng=' + lng + '&creator=' + creator)
    .toPromise()
    .then(this.help.extractData)
    .catch(this.help.handleError);


  }


}
