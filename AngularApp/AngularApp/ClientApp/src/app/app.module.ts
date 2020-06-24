import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
 
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeFormComponent } from './employee-form.component';
import { EmployeeCreateComponent } from './employee-create.component';
import { EmployeeEditComponent } from './employee-edit.component';
import { NotFoundComponent } from './not-found.component';
 
import { DataService } from './data.service';
 
const appRoutes: Routes = [
    { path: '', component: EmployeeListComponent },
    { path: 'create', component: EmployeeCreateComponent },
    { path: 'edit/:id', component: EmployeeEditComponent },
    { path: '**', component: NotFoundComponent }
];
 
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EmployeeListComponent, EmployeeCreateComponent, EmployeeEditComponent,
        EmployeeFormComponent, NotFoundComponent],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }