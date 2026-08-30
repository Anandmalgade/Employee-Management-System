import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  
  constructor(private http:HttpClient){}

  private baseUrl="https://localhost:9191/api";

  getAllEmployee():Observable<Employee[]>{
    
    return this.http.get<Employee[]>(this.baseUrl);
  }
   
}
