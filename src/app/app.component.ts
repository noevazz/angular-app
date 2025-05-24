import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroItemComponent } from './components/hero-item/hero-item.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
