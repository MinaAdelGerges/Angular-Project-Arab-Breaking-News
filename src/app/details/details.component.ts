import { HttpClient } from '@angular/common/http';
import { details } from './details.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
// import { networkInterfaces } from 'os';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  newsdetails:details;
  constructor(private _httpClient:HttpClient,private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {


    this._activatedRoute.paramMap.subscribe(params=>{
   
    //  let id= this.newsdetails.filter(i=>i.ID==+params.get('id'));
      let id=+params.get('id');
    //  alert(id)
      this._httpClient.get(`http://api.mohamed-sadek.com/news/item/${id}`).subscribe(response=>{
         this.newsdetails=response as details;
        //  alert(newsdetails)
         
   

      })


      
    })


     
  }

}
