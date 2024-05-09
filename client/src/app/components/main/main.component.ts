import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private router: Router, private Localstorage: LocalStorageService) { }


  nickname:any = '';
  ngOnInit(): void {
  if (this.Localstorage.getItem('nickname') == null) {
  this.nickname = 'Anonymous#'+Math.floor(Math.random() * 10000);
  }
  else{
  this.nickname = this.Localstorage.getItem('nickname');
  }
}
  jcode:string = '';
  gamejoin: boolean = false;
  uuid = '';
  
  ifnicknone() {
    if (this.nickname == '') {
      this.nickname = 'Anonymous#'+Math.floor(Math.random() * 10000);
      this.Localstorage.removeItem('nickname');
    }
    else{
      this.Localstorage.setItem('nickname', this.nickname);
    }
  }

  gamelobby(){
    if (this.gamejoin == false) {
      this.uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      this.router.navigate(['/lobby', this.uuid]);
    }
    else{
      this.router.navigate(['/lobby', this.jcode]);
    }
    this.Localstorage.setItem('nickname', this.nickname);
  }
  
}
