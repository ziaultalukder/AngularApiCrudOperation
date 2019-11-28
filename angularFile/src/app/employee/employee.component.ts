import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import {HeroService} from '../hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee = {
    Id:null,
    Name: '',
    Phone: '',
    ImagePath: ''
  };

  constructor(
    private heroService: HeroService,
    private route: Router
    ) { }

  ngOnInit() {
  }

  saveEmployee(): void{
    this.heroService.Save(this.employees);
    this.route.navigate(['employeeList']);
  }

  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.employees.ImagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      
    }
  }
  onPhotoUpload(e){
    this.employees.ImagePath = e.target.files[0].name;
  }

}
