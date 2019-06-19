import { details } from './../details/details.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-maindepartment',
  templateUrl: './maindepartment.component.html',
  styleUrls: ['./maindepartment.component.css']
})
export class MaindepartmentComponent implements OnInit {
  newsdetails:details[]=[];
  constructor(private _httpClient:HttpClient,private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params=>{
   
      //  let id= this.newsdetails.filter(i=>i.ID==+params.get('id'));
        let id=+params.get('id');
      //  alert(id)
        this._httpClient.get(`http://api.mohamed-sadek.com/news/department/61`).subscribe(response=>{
           this.newsdetails=response as details[];
          //  alert(newsdetails)
           
     
        })


      
      })
  }

}
