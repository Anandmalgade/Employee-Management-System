import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee-service';
import { CreateEmployee } from '../../models/CreateEmployee';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {

  constructor(private service: EmployeeService) {}

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  saveEmployee(): void {

    const employee: CreateEmployee = {
      firstName: this.employeeForm.value.firstName ?? '',
      lastName: this.employeeForm.value.lastName ?? '',
      email: this.employeeForm.value.email ?? ''
    };

    console.log('Sending:', employee);

    this.service.addEmployee(employee)
      .subscribe({
        next: data => {
          console.log('Employee added:', data);
        },
        error: err => {
          console.error('Error:', err);
        }
      });
  }
}