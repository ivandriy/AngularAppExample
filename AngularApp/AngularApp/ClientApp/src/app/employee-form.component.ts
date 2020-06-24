import { Component, Input } from '@angular/core';
import { Employee } from './employee';
@Component({
    selector: "employee-form",
    templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent {
    @Input() employee: Employee;
}