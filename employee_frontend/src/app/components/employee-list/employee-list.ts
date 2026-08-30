import { Component, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { Employee } from '../../models/Employee';
import { single } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  imports: [],
  standalone:true,
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
   constructor(private employeeService:EmployeeService){}


   employees=signal<Employee[]>([]);
   errorMsg=signal<String>('');
   loading=signal<boolean>(false);

   ngOnInit(): void {
       this.loadEmployees();
   }

   loadEmployees(){
      this.employeeService.getAllEmployee().subscribe
      ({
          next:(data)=>{
                this.employees.set(data);
                this.loading.set(false);
          },
          error:(err:HttpErrorResponse)=>{
              console.log(err);
               this.loading.set(false);
              if(err.status==0){
                this.errorMsg.set("Backend in not Running");
              }else{

                 this.errorMsg.set(err.error?.message||'faild to load employee');
              }
            }
      });
   }

}
