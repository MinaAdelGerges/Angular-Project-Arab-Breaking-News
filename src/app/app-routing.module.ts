import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DepartmentnewsComponent } from './departmentnews/departmentnews.component';
import { MaindepartmentComponent } from './maindepartment/maindepartment.component';

const routes: Routes = [
  {path:'details/:id',component:DetailsComponent},
  {path:'departmentnews/:id',component:DepartmentnewsComponent},
  {path:'',component:MaindepartmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
