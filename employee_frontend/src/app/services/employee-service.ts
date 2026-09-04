import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import { CreateEmployee } from '../models/CreateEmployee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  
     private baseUrl='http://localhost:9191/api';
    constructor(private http:HttpClient){}

    getAllEmployee():Observable<Employee[]>{
        
      return this.http.get<Employee[]>(this.baseUrl);
    }

    addEmployee(employee:CreateEmployee):Observable<Employee>{
         return this.http.post<Employee>(this.baseUrl,employee);
    }

    getEmployeeByEmail(email:string):Observable<Employee>{
        
      return this.http.get<Employee>(`${this.baseUrl}/by/${email}`);
    }
}
