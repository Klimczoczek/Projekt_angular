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
  czyartystawpisany: boolean = true;

  ngOnInit() {


  }

  ngonDestroy(){
    clearTimeout(this.czekanie);
  }


  piszemy(){
    // console.log(this.artist)
    if (this.artist != null && this.artist != '' && this.artist.length > 2) {
      
      clearTimeout(this.czekanie);
      this.czekanie = setTimeout(this.Szukajartyste.bind(this), 500);
    }
    else{
      this.czyartystawpisany = false;
    }

  }

  Szukajartyste(){
    this.czyartystawpisany = true;
    this.SpotifyAuth.getToken().subscribe((data: any) => {
      this.token = data.access_token;  
      // console.log(this.token);
      this.searchget.search(this.artist,this.token).subscribe((data: any) => {
        
        console.log(data);
      });
    });
  }

}
