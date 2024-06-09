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

  GetAlbums(artistid: string, token: string){
    return this.http.get('https://api.spotify.com/v1/artists/'+ artistid + '/albums?include_groups=album', {headers : {Authorization: 'Bearer '+ token}});
    // https://api.spotify.com/v1/artists/4nPxrGG7k7aEKmNLsfX4cd/albums?include_groups=album
  }

  GetName(artistid: string, token: string){
    return this.http.get('https://api.spotify.com/v1/artists/'+ artistid, {headers : {Authorization: 'Bearer '+ token}});
  }
}
