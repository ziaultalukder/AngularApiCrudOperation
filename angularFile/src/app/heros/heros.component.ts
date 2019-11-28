import { Component, OnInit } from '@angular/core';
import { Heros } from '../Heros';
import {HEROS} from '../HeroList';
import {HeroService} from '../hero.service';
import {HEROES} from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  GetHeros(): void{
    this.heroService.GetHeros().subscribe(heros=> this.heroes = heros);
  }
  GetHero(): void{
    this.heroService.GetHeros().subscribe(heroes => this.heroes = heroes)
  }
  ngOnInit() {
    this.GetHero();
  }
  heroes : Heros[];
  
}
