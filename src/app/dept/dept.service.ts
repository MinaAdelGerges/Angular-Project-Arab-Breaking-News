import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  constructor( private _http:HttpClient) { }

  getTopNews(){
    return this._http.get("http://api.mohamed-sadek.com/News/FeaturedNews");
    
  }
}
