import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { Employee } from './employee';
 
@Component({
    templateUrl: './employee-create.component.html'
})
export class EmployeeCreateComponent {
 
    employee: Employee = new Employee();
    constructor(private dataService: DataService, private router: Router) { }
    save() {
        this.dataService.createEmployee(this.employee).subscribe(data => this.router.navigateByUrl("/"));
    }
}