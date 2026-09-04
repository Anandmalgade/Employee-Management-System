import { Component } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-employee',
  imports: [FormsModule],
  templateUrl: './search-employee.html',
  styleUrl: './search-employee.css',
})
export class SearchEmployee {
   
  email:string='';

  employee?:Employee;

  constructor(private service:EmployeeService){}

  searchEmployee(){
      this.service.getEmployeeByEmail(this.email)
      .subscribe(data=>{
         this.employee=data;
      });
  }
}
