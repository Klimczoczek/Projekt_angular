import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {
  @Input() nazwa: string | undefined;
  @Input() url: string | undefined;
  @Input() image: string | undefined;
  @Input() id: string | undefined;
  
  @Output() wybranie = new EventEmitter<string>();


}
