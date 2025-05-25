import { Hero, PowerStat } from '../../shared/interfaces/hero.interface';

import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent {
  public hero = input.required<Hero>();

  isHeroVillain = computed(()=>{ return this.hero().alignment === "bad"});

  decrementPowerStats(powerstat: PowerStat): void{
    const value = this.hero().powerstats[powerstat];
    if(value > 0){
      this.hero().powerstats[powerstat]--;
    }
  }

  incrementPowerStats(powerstat: PowerStat): void{
    const value = this.hero().powerstats[powerstat];
    if(value < 100){
      this.hero().powerstats[powerstat]++;
    }
  }
}