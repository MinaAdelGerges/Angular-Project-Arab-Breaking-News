import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { departments } from './departments.model';
import { DepartmentsService } from './departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
news:departments[]=[];




  constructor( private _departmentservice:DepartmentsService ) { }

  ngOnInit() {

    this._departmentservice.getTopNews().subscribe(
      (response)=>{
        this.news=response as departments[];
      },
      (error)=>{
        alert("error");
      },
      ()=> {}
    );


  }

}
