import { Injectable } from '@angular/core';
import {Heros} from './Heros'
import { HEROS } from './HeroList';
import {Observable, of} from 'rxjs';
import {MessagesService} from './messages.service';
import {Employee} from './employee';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {  
  
  constructor(private messageService: MessagesService) { }
  
  hero: Heros[];

  GetHeros(): Observable<Heros[]> {
    this.messageService.Add('HeroService: fetched heroes');
    return of(HEROS);
  }

  singleHero(Id: number): Observable<Heros>{
    return of (HEROS.find(h =>h.Id === Id));
  }

  private employee: Employee[] = [
    {Id: 1, Name: 'Hasan Ali', Phone:'01728388751', ImagePath: ''},
    {Id: 2, Name: 'Rohim Miya', Phone:'01728388751', ImagePath: ''},
    {Id: 3, Name: 'Zila Zul', Phone:'01728388751', ImagePath: ''},
    {Id: 4, Name: 'Sujon', Phone:'01728388751', ImagePath: ''},
    {Id: 5, Name: 'Sobuj', Phone:'01728388751', ImagePath: ''}
  ];

  ListOfEmployee():Observable<Employee[]>{
    return of(this.employee);
  }

  getEmployee(): Employee[]{
    return this.employee;
  }

  Save(employee: Employee){
    this.employee.push(employee);
  }

}
