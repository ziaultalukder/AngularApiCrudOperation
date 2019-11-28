import { Component, OnInit, Input } from '@angular/core';
import {Heros} from '../Heros'
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  hero: Heros;

  constructor(private route: ActivatedRoute, private location: Location, private heroService: HeroService) { }

  ngOnInit() : void {
    this.getHero();
  }

  getHero(): void{
    const Id = +this.route.snapshot.paramMap.get('Id');
    this.heroService.singleHero(Id)
    .subscribe(hero=> this.hero = hero);
    console.log(this.hero);
  }

}
