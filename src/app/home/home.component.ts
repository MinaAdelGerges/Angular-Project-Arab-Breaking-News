import { Component, OnInit } from '@angular/core';
import { home } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homes:home[]=[];

  constructor(private _homeservice:HomeService) { }

  ngOnInit() {

    this._homeservice.getDepts().subscribe(
      (response)=>{
        
        this.homes=response as home[];
        this.homes=this.homes.filter(m=>m.ShowInMainMenu==true);
      },
      (error)=>{
        alert("error");
      },
      ()=> {}
    );


  }
  }



