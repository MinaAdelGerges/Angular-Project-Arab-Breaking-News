import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DeptComponent } from './dept/dept.component';
import { DetailsComponent } from './details/details.component';
import { DepartmentnewsComponent } from './departmentnews/departmentnews.component';
import { MaindepartmentComponent } from './maindepartment/maindepartment.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    DepartmentsComponent,
    DeptComponent,
    DetailsComponent,
    DepartmentnewsComponent,
    MaindepartmentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
