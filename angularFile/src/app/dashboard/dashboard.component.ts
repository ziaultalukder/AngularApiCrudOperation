import { Component, OnInit } from '@angular/core';
import {Heros} from '../Heros';
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService : HeroService) { }
  heroes: Heros[] = [];
  ngOnInit() {
    this.getHero();
  }
  getHero(): void{
    this.heroService.GetHeros().subscribe(heroes => this.heroes = heroes.slice(0,4))
  }

}
