import { Component } from '@angular/core';
import { SearchapiService } from '../../services/searchapi.service';
import { SpotifyAuthService } from '../../services/spotify-auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from '../artist/artist.component';

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [FormsModule,CommonModule,ArtistComponent],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.css'
})
export class LobbyComponent {

  
  constructor(private searchget: SearchapiService,private SpotifyAuth: SpotifyAuthService) { }

  token: any;
  artist:string = '';
  czekanie: any;
  artists: Array<any> = [];
  artistchosen: boolean = false;
  albums: Array<any> = [];
  albumslength: number = 0;

  artistname: string = '';
  
  czyartystawpisany: boolean = true;

  ngOnInit() {

    this.czyartystawpisany = false;

  }

  ngonDestroy(){
    clearTimeout(this.czekanie);
  }


  piszemy(){
    // console.log(this.artist)
    if (this.artist != null && this.artist != '' && this.artist.length > 2) {
      this.artists = [];
      clearTimeout(this.czekanie);
      this.czekanie = setTimeout(this.Szukajartyste.bind(this), 500);
    }
    else{
      this.czyartystawpisany = false;
    }

  }

  SprawdzZdjecie(zdjecie: any){
    // console.log(zdjecie);
    if (zdjecie.length == 0) {
      return "https://www.w3schools.com/w3images/avatar1.png";
    }
    return zdjecie[0].url;
  }

  WybranoArtyste(artysta: any){
    this.artistchosen = true;
    this.albums = [];
    console.log(artysta);
    this.SpotifyAuth.getToken().subscribe((data: any) => {
      this.token = data.access_token;  
      // console.log(this.token);
      this.searchget.GetAlbums(artysta,this.token).subscribe((data: any) => {
        // console.log(data);
        this.albums = data.items;
        this.albumslength = data.items.length;
        console.log(this.albums);
      });

      this.searchget.GetName(artysta,this.token).subscribe((data: any) => {
        this.artistname = data.name;
        // console.log(this.artistname);
      });
    });
  }

  Szukajartyste(){
    this.artists = [];
    this.czyartystawpisany = true;
    this.SpotifyAuth.getToken().subscribe((data: any) => {
      this.token = data.access_token;  
      // console.log(this.token);
      this.searchget.search(this.artist,this.token).subscribe((data: any) => {
        for (let i = 0; i < data.artists.items.length; i++) {
          this.artists.push(data.artists.items[i]);
        }
        // console.log(this.artists)
      });
    });
  }

}
