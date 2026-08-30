package com.kits.repo;


import java.util.Optional;

import com.kits.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>
{

    public Optional<Employee> findByEmail(String email);
}
