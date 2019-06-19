import { Component, OnInit } from '@angular/core';
import { dept } from './dept.model';
import { DeptService } from './dept.service';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {
  depts:dept[]=[];

  constructor(private _deptservice:DeptService) { }

  ngOnInit() {

    this._deptservice.getTopNews().subscribe(
      (response)=>{
        this.depts=response as dept[];
      },
      (error)=>{
        alert("error");
      },
      ()=> {}
    );


  }

}
