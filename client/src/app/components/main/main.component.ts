import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private router: Router) { }

  nickname = 'Anonymous#'+Math.floor(Math.random() * 10000);
  gamejoin: boolean = false;
  
  options = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];


  ifnicknone() {
    if (this.nickname == '') {
      this.nickname = 'Anonymous#'+Math.floor(Math.random() * 10000);
    }
  }
  
}
