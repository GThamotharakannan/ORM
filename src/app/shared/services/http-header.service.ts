import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class HttpHeaderService {
  url;
  constructor(private http: Http, private router: Router) {
 
    this.router.events.subscribe((url: any) => {
      this.url = url.url;
    });
  }

  createAuthorizationHeader(headers: Headers) {
    if (sessionStorage.getItem('userSessionToken') != undefined) {
      headers.append('userTokenParam', localStorage.apiToken);
      headers.append('token', localStorage.apiToken);
    }
    headers.append('userTokenParam', localStorage.apiToken);
    headers.append('token', localStorage.apiToken);
  }

  get(url) {
    let headers = new Headers();
    headers.append('userTokenParam',localStorage.apiToken);
    headers.append('token', localStorage.apiToken);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    // let headers = new Headers();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('userTokenParam', localStorage.apiToken);
    headers.append('token',localStorage.apiToken);
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    //this.createAuthorizationHeader(headers);
    //console.log(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
  put(url, data) {
    // let headers = new Headers();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('userTokenParam',localStorage.apiToken);
    headers.append('token',localStorage.apiToken);
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });
    // this.createAuthorizationHeader(headers);    
    return this.http.put(url, data, {
      headers: headers
    });
  }
  delete(url) {
    let headers = new Headers();
    headers.append('userTokenParam',localStorage.apiToken);
    headers.append('token', localStorage.apiToken);
    // this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: headers
    });
  }

  deletenew(url, data) {
    let headers = new Headers();
    headers.append('userTokenParam', localStorage.apiToken);
    headers.append('token', localStorage.apiToken);
    // this.createAuthorizationHeader(headers);

    return this.http.delete(url, new RequestOptions({
      headers: headers,
      body: data
    }));
  }

}
