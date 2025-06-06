import { Hero, PowerStat } from '../../shared/interfaces/hero.interface';

import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { HeroPowerstatsChange } from '../../shared/interfaces/hero-powerstats-change.interface';

@Component({
  selector: 'app-hero-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent {
  public hero = input.required<Hero>();

  powerstatsChange = output<HeroPowerstatsChange>();

  isHeroVillain = computed(()=>{ return this.hero().alignment === "bad"});

  decrementPowerStats(powerstat: PowerStat): void{
    this.powerstatsChange.emit({ hero: this.hero(), powerstat: powerstat, value: -1 });
  }

  incrementPowerStats(powerstat: PowerStat): void{
    this.powerstatsChange.emit({ hero: this.hero(), powerstat: powerstat, value: 1 });
  }
}