import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit{

  ngOnInit(): void {
        this.getAll();
  }
    employees:Employee[]=[];

  constructor(private service:EmployeeService){}

    getAll(){
          return this.service.getAllEmployee()
          .subscribe( data =>{this.employees=data});
          
    }  
       

}
