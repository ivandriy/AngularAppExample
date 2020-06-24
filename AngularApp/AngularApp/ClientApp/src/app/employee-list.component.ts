import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Employee } from './employee';
 
@Component({
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
 
    employees: Employee[]; 
    constructor(private dataService: DataService) { }
 
    ngOnInit() {
        this.load();
    }
    load() {
        this.dataService.getEmployees().subscribe((data: Employee[]) => this.employees = data);
    }
    delete(id: number) {
        this.dataService.deleteEmployee(id).subscribe(data => this.load());
    }
}