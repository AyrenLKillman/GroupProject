import { Component } from '@angular/core';

@Component({
  selector: 'app-ayren',
  standalone: true,
  imports: [],
  templateUrl: './ayren.component.html',
  styleUrl: './ayren.component.css'
})
export class AyrenComponent {

  ButtonClicks = 0;
  hiddentext = '';
    Buttonpress(): void {
      const fart = new Audio();
      fart.src = 'fartreverb.mp3'
      fart.play()
      this.ButtonClicks += 1
      
      if (this.ButtonClicks === 1) {
        this.hiddentext = 'hah hah stinky'
      } else if(this.ButtonClicks === 10) {
        this.hiddentext = "liking the button I see"
      } else if(this.ButtonClicks === 50) {
        this.hiddentext = 'dang is the farts that addictive?'
      } else if (this.ButtonClicks === 100) {
        this.hiddentext = 'you clicked the button a hundred times, why'
      } else if (this.ButtonClicks === 200) {
        this.hiddentext = "AAAAAAAAAAAAAAAAAAAAAAAAAAA"
      }
    }


}

