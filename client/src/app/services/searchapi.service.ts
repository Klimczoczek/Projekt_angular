import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchapiService {

  searchurl='https://api.spotify.com/v1/search?q=';

  constructor(private http: HttpClient) { }

  

  search(query: string, token:string) {
    return this.http.get(this.searchurl + query+ '&type=artist&limit=5', {headers: {Authorization: 'Bearer  '+ token}});
  }

}
