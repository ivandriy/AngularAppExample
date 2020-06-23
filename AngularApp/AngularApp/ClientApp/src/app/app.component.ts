import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Employee } from './employee';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent implements OnInit {

    employee: Employee = new Employee();
    employees: Employee[];
    tableMode: boolean = true;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadEmployees();
    }
    
    loadEmployees() {
        this.dataService.getEmployees()
            .subscribe((data: Employee[]) => this.employees = data);
    }

    save() {
        if (this.employee.id == null) {
            this.dataService.createEmployee(this.employee)
                .subscribe((data: Employee) => this.employees.push(data));
        } else {
            this.dataService.updateEmployee(this.employee)
                .subscribe(data => this.loadEmployees());
        }
        this.cancel();
    }
    
    editEmployee(e: Employee) {
        this.employee = e;
    }
    cancel() {
        this.employee = new Employee();
        this.tableMode = true;
    }
    delete(e: Employee) {
        this.dataService.deleteEmployee(e.id)
            .subscribe(data => this.loadEmployees());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}