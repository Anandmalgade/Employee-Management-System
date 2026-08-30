package com.kits.controller;

import java.util.List;

import com.kits.entity.Employee;
import com.kits.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class EmployeeController
{
    @Autowired
    EmployeeService employeeService;

    //return all employees
    @GetMapping
    public List<Employee> getAllEmployees()
    {
        return employeeService.getAllEmployees();
    }
    //add Employees
    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee)
    {
        return employeeService.addEmployee(employee);
    }
    //getEmployee By id
    @GetMapping("{id}")
    public Employee getEmployeeById(@PathVariable long id)
    {
        return employeeService.getEmployeeById(id);
    }
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployeeById(@PathVariable long id,@RequestBody Employee employee)
    {
        return employeeService.updateEmployeeById(id,employee);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id)
    {
        return employeeService.deleteEmployee(id);

    }

    @GetMapping("/employees/by/{email}")
    public ResponseEntity<Employee>getEmployeeByEmail(@PathVariable String email){
        Employee employee=employeeService.getEmployeeByEmail(email);
        return new ResponseEntity<Employee>(employee,HttpStatus.OK);
    }

}