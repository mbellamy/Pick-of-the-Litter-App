import { Http, Response } from '@angular/http';

export class Helper {

  public extractData(res: Response) {
    const body = res.json();
    console.log(res.json());
    localStorage.setItem('token', res.headers.get('token'));

    return body || { };
  }

  public handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      console.error(error);

      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Promise.reject(errMsg);
  }
}
