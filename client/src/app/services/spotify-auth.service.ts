import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  constructor(private http: HttpClient) { }

  getToken() {
    const clientId = 'e367e84fd6724a6caa1a9cc37290df43';
    const clientSecret = '55ad71e03f0e488395a7e46236a8c1ef';

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', clientId);
    body.set('client_secret', clientSecret);

    return this.http.post('https://accounts.spotify.com/api/token', body.toString(), { headers: headers });
  }
}