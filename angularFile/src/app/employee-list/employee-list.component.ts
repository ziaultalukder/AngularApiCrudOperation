import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private heroService: HeroService) { }
allEmployees: Employee[];
  ngOnInit() {
    this.allEmployees = this.heroService.getEmployee();
    this.loadEmployeeList();
  }

  allEmployee: Employee[];
  loadEmployeeList(){
    this.heroService.ListOfEmployee().subscribe(employee => this.allEmployee = employee);
  }

  

}
