import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { User } from '../models/user';
import {Helper} from '../MISC/helper';

@Injectable()
export class AuthService {
  private serverUrl = 'http://localhost:8080/Login';

  constructor(private help: Helper, private http: Http) { }

  getAuthorizationHeader(): RequestOptions {
    const token = localStorage.getItem('token');
    const headers = new Headers({'Authorization': 'Bearer ' + token});
    return new RequestOptions({headers: headers});
  }

  login(email, password): Promise<User> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const cred = {email: email, password: password};
    return this.http.post(this.serverUrl, cred, options)
    .toPromise()
    .then(this.help.extractData)
    .catch(this.help.handleError);

 }


}
